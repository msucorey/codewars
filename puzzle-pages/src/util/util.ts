// TODO add test

const factorial = (num: number): number => {
    if (!Number.isInteger(num) || num < 0) throw new Error('invalid argument');

    if ([0, 1].includes(num)) return num;

    return num * factorial(num - 1);
}

export { factorial };
