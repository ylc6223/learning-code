// 策略跟算法的过程要分开
// 薪资策略
export interface SalaryStrategy {
  // 根据考评计算薪水
  calcSalaryByLevel(base: number): number;
}

// 奖金策略 加班才有奖金 奖金 = 加班时长*费率*加班时薪
export interface PrizeStrategy {
  // 根据加班时长计算奖金
  calcPrizeByOverTimeHours(base: number, hours: number): number;
}

// 以后策略发生变化 只需修改对应的策略算法
// 薪资策略A
export class SalaryStrategyA implements SalaryStrategy {
  calcSalaryByLevel(base: number): number {
    return base + 2000;
  }
}
// 薪资策略B
export class SalaryStrategyB implements SalaryStrategy {
  calcSalaryByLevel(base: number): number {
    return base + 1000;
  }
}
// 薪资策略C
export class SalaryStrategyC implements SalaryStrategy {
  calcSalaryByLevel(base: number): number {
    return base;
  }
}

// 奖金策略A
export class PrizeStrategyA implements PrizeStrategy {
  calcPrizeByOverTimeHours(base: number, hours: number): number {
    return base * hours * 1.5;
  }
}
// 奖金策略B
export class PrizeStrategyB implements PrizeStrategy {
  calcPrizeByOverTimeHours(base: number, hours: number): number {
    return base * hours * 1.3;
  }
}
// 奖金策略C
export class PrizeStrategyC implements PrizeStrategy {
  calcPrizeByOverTimeHours(base: number, hours: number): number {
    return base * hours * 0;
  }
}
// 财务类 负责处理各种不同的策略 管理具体的策略
export class Finance {
  salaryStrategy: SalaryStrategy;
  prizeStrategy: PrizeStrategy;
  setSalaryStrategy(salaryStrategy: SalaryStrategy): void {
    this.salaryStrategy = salaryStrategy;
  }
  setPrizeStrategy(prizeStrategy: PrizeStrategy) {
    this.prizeStrategy = prizeStrategy;
  }
}
