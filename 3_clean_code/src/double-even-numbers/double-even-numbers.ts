export function doubleEvenNumbers(numbers: number[]): number[]{
    const evenNumbers = getEvenNumbers(numbers);
    const doubledNumbers = doubleNumbers(evenNumbers);
    return doubledNumbers;
}

function getEvenNumbers(numbers: number[]): number[]{
    return numbers.filter(number => number % 2 === 0 && number !== 0);
}

function doubleNumbers(numbers: number[]): number[]{
    return numbers.map(number => number * 2);
}