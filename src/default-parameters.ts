export {};

const NextYearSalary = (CurrentSarary: number, rate: number = 1.1) => {
    return CurrentSarary * rate;
}


console.log(NextYearSalary(1000));