import React, { useState } from 'react';
import {
  SalaryStrategy,
  SalaryStrategyA,
  SalaryStrategyB,
  SalaryStrategyC,
  PrizeStrategy,
  PrizeStrategyA,
  PrizeStrategyB,
  PrizeStrategyC,
  Finance,
} from './salary';
import './App.css';
const enum OrderStatus {
  Pending,
  Shipped,
  Completed,
  Cancelled,
  Unknown,
}

interface Order {
  username: string;
  products: string;
  num: number;
  id: string;
  status: OrderStatus;
  createTime: string;
}

interface Deductions {
  // 税金
  tax: number;
  // 保险
  insurance: number;
  // 退休金
  retirement: number;
}

const enum PerformanceRatings {
  outstanding = 'A',
  average = 'B',
  bad = 'C',
}
// type PerformanceRating = PerformanceRatings;

interface SalaryRecord {
  // 员工编号
  employee_id: string;
  // 员工姓名
  employee_name: string;
  // 所属部门
  department: string;
  // 职位
  // position: string;
  // 基本工资
  salary: number;
  // 发薪周期（如：月度、双周）
  // pay_period: string;
  // 发薪日期
  // pay_date: string;
  // 工作小时数
  // hours_worked: number;
  // 加班小时数
  overtime_hours: number;
  // 基本工资率
  // base_pay_rate: number;
  // 加班工资率
  // overtime_pay_rate: number;
  // // 总工资（包括加班工资）
  gross_salary: number;
  // // 扣款项目，包括税金、保险、退休金等
  // deductions: Deductions;
  // // 净工资（扣除扣款后的工资）
  // net_salary: number;
  // // 发放方式（如：直接存款、支票）
  // payment_method: string;
  // // 银行账号（若是直接存款）
  // bank_account: string;
  // 付款状态（如：已支付、待支付）
  payment_status: string;
  // 考评等级
  performance_rating: PerformanceRatings;
}
// type Keys = keyof Order;

// interface Obj {
//   desc: Keys;
// }

// 生成指定范围的随机整数
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const statusText: string[] = [
  '待处理',
  '已发货',
  '已完成',
  '已取消',
  '异常订单',
];
const users = ['小吴', '小王', '小张', '小李', '小刘']; //名字列表
const goods = ['笔记本电脑', '手机', '空调', '相机', '洗衣机']; //商品种类
const status = [0, 1, 2, 3, 4]; //订单状态
const departments = ['技术', '管理', '生产']; //部门
const performanceRatings: PerformanceRatings[] = [
  PerformanceRatings.outstanding,
  PerformanceRatings.average,
  PerformanceRatings.bad,
]; //考评等级
let orderList: Order[] = new Array(6).fill(null);
let salaryRecordList: SalaryRecord[] = new Array(10).fill(null);
const finance = new Finance();
// 填充薪资数据
salaryRecordList = salaryRecordList.map((item, index) => {
  // 随机考评等级
  let performance_rating = performanceRatings[getRandomInt(0, 2)];
  // 随机加班时长
  let overtime_hours = getRandomInt(0, 40);
  return {
    employee_id: typeof index === 'number' ? String(index) : index,
    employee_name: users[getRandomInt(0, 4)],
    department: departments[getRandomInt(0, 2)],
    overtime_hours: overtime_hours,
    salary: calcSalary(performance_rating), //计算基本工资
    gross_salary: calcSalary(performance_rating) + calcPrize(overtime_hours), //总工资 = 基本工资+加班工资
    payment_status: '未发放',
    performance_rating: performance_rating,
  };
});
// 填充订单数据
orderList = orderList.map((item, index) => {
  return {
    username: users[getRandomInt(0, 4)],
    products: goods[getRandomInt(0, 4)],
    num: getRandomInt(1, 11),
    id: typeof index === 'number' ? String(index) : index,
    status: status[getRandomInt(0, 4)],
    createTime: new Date().toLocaleString(),
  };
});
// 传统做法对多种状态通过if else来进行判断
const processOrder = function (order: Order) {
  // 待处理订单
  if (order.status === OrderStatus.Pending) {
    console.log(statusText[order.status]);
    return statusText[order.status];
  }
  // 已发货
  else if (order.status === OrderStatus.Shipped) {
    console.log(statusText[order.status]);
    return statusText[order.status];
  }
  // 已完成
  else if (order.status === OrderStatus.Completed) {
    console.log(statusText[order.status]);
    return statusText[order.status];
  }
  // 已取消
  else if (order.status === OrderStatus.Cancelled) {
    console.log(statusText[order.status]);
    return statusText[order.status];
  }
  // 未知订单
  else {
    console.log(statusText[order.status]);
    return statusText[order.status];
  }
};
// 通过策略模式或映射关系更灵活 表驱动法
// record可以看作是一个对象，key是number类型，value是function类型
// 通过建立映射关系来选择对应的处理函数
const orderHandlers: Record<number, (order: Order) => string> = {
  [OrderStatus.Pending]: function (order) {
    // 执行待处理订单处理逻辑
    return statusText[order.status];
  },
  [OrderStatus.Shipped]: function (order) {
    // 执行已发货订单处理逻辑
    return statusText[order.status];
  },
  [OrderStatus.Completed]: function (order) {
    // 执行已完成订单处理逻辑
    return statusText[order.status];
  },
  [OrderStatus.Cancelled]: function (order) {
    // 执行已取消订单处理逻辑
    return statusText[order.status];
  },
  [OrderStatus.Unknown]: function (order) {
    // 执行异常订单处理逻辑
    return statusText[order.status];
  },
};
// 订单处理函数
const processOrderNew = function (order: Order) {
  console.log(order, '@@@@@');
  const handler =
    orderHandlers[order.status] || orderHandlers[OrderStatus.Unknown];
  return handler(order);
};

// 根据绩效等级计算基本薪资
function calcSalary(level: PerformanceRatings) {
  const base: number = 20000;
  let salaryStrategy: SalaryStrategy;
  // let salary = 0;
  if (level === PerformanceRatings.outstanding) {
    // 决定使用哪个算法与具体算法的过程耦合，这里if else应该只决定使用哪个算法
    // salary = base + 2000;
    // salaryStrategy = new SalaryStrategyA();
    finance.setSalaryStrategy(new SalaryStrategyA());
  } else if (level === PerformanceRatings.average) {
    // salary = base + 1000;
    // salaryStrategy = new SalaryStrategyB();
    finance.setSalaryStrategy(new SalaryStrategyB());
  } else {
    // salaryStrategy = new SalaryStrategyC();
    // salary = base;
    finance.setSalaryStrategy(new SalaryStrategyC());
  }
  // const salary = salaryStrategy.calcSalaryByLevel(base);
  const salary = finance.salaryStrategy.calcSalaryByLevel(base);
  return salary;
}

// 根据加班时长计算奖金
function calcPrize(hours: number) {
  const base: number = 40;
  let prize = 0;
  // let prizeStrategy: PrizeStrategy;
  if (hours >= 40) {
    // prizeStrategy = new PrizeStrategyA();
    finance.setPrizeStrategy(new PrizeStrategyA());
  } else if (hours >= 20 && hours < 40) {
    // prizeStrategy = new PrizeStrategyB();
    finance.setPrizeStrategy(new PrizeStrategyB());
  } else {
    // prizeStrategy = new PrizeStrategyC();
    finance.setPrizeStrategy(new PrizeStrategyC());
  }
  // prize = prizeStrategy.calcPrizeByOverTimeHours(base, hours);
  prize = finance.prizeStrategy.calcPrizeByOverTimeHours(base, hours);
  return prize;
}

function App() {
  return (
    <div className="order-container bg-#282c34 min-h-100vh text-center">
      <div className="h-full flex justify-between color-white">
        {/* 订单状态 */}
        <div className="ml-4">
          <h3 className="text-left">TS使用表驱动法处理订单状态</h3>
          <ul className="relative">
            {orderList.map((orderItem) => {
              return (
                <li className="my-4" key={orderItem.id}>
                  <div className="text-left max-w-[26rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                    <span className="block">订单id:{orderItem.id}</span>
                    <span className="block">
                      {/* 订单状态:{processOrder(orderItem)} */}
                      订单状态:{processOrderNew(orderItem)}
                    </span>
                    <span className="block">商品数量:{orderItem.num}</span>
                    <span className="block">买家:{orderItem.username}</span>
                    <span className="block">所购商品:{orderItem.products}</span>
                    <span className="block">
                      订单创建时间:{orderItem.createTime}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* 策略模式处理薪资发放 */}
        <div className="ml-4">
          <h3 className="text-left">
            TS使用策略模式按照员工绩效和加班时长计算总工资
          </h3>
          <ul className="relative">
            {salaryRecordList.map((salaryRecordItem) => {
              return (
                <li className="my-4" key={salaryRecordItem.employee_id}>
                  <div className="text-left max-w-[26rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                    <span className="block">
                      员工编号:{salaryRecordItem.employee_id}
                    </span>
                    <span className="block">
                      {/* 订单状态:{processOrder(orderItem)} */}
                      员工姓名:{salaryRecordItem.employee_name}
                    </span>
                    <span className="block">
                      所在部门:{salaryRecordItem.department}
                    </span>
                    <span className="block">
                      基本薪资:{salaryRecordItem.salary}
                    </span>
                    <span className="block">
                      总工资:{salaryRecordItem.gross_salary}
                    </span>
                    <span className="block">
                      加班时长:{salaryRecordItem.overtime_hours}
                    </span>
                    <span className="block">
                      薪资发放状态:{salaryRecordItem.payment_status}
                    </span>
                    <span className="block">
                      考评等级:{salaryRecordItem.performance_rating}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
