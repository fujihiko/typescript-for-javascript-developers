export {};

const reducer = (accumulater: number, currentValue: number) => {
    console.log({ accumulater, currentValue})
    return accumulater + currentValue;
}

const sum = (...values: number[]): number => {
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));