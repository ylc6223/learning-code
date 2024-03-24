const enum PerformanceRatings {
  outstanding = 'A',
  average = 'B',
  bad = 'C',
}

interface SalaryRecord {
  employee_id: string;
  employee_name: string;
  department: string;
  salary: number;
  payment_status: string;
  performance_rating: PerformanceRatings;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const users = ['小吴', '小王', '小张', '小李', '小刘'];
const departments = ['技术', '管理', '生产'];
const performanceRatings: PerformanceRatings[] = [
  PerformanceRatings.outstanding,
  PerformanceRatings.average,
  PerformanceRatings.bad,
];

let salaryRecordList: SalaryRecord[] = new Array(10).fill(null);

salaryRecordList = salaryRecordList.map((item, index) => {
  let performance_rating = performanceRatings[getRandomInt(0, 2)]; // 生成随机的枚举值

  return {
    employee_id: typeof index === 'number' ? String(index) : index,
    employee_name: users[getRandomInt(0, 4)],
    department: departments[getRandomInt(0, 2)],
    salary: calcSalary(performance_rating),
    payment_status: '未发放',
    performance_rating: performance_rating,
  };
});

function calcSalary(level: PerformanceRatings): number {
  const base: number = 20000;
  let salary = base;
  if (level === PerformanceRatings.outstanding) {
    salary += 2000;
  } else if (level === PerformanceRatings.average) {
    salary += 1000;
  }
  return salary;
}
