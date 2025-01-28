import { NotANumberError } from "./error/not-a-number-error";

export function makeAllPositives(numbers: number[]): number[] {
    return numbers.map(n => {
        if(typeof n !== "number" || isNaN(n) || n === Infinity || n === -Infinity) {
            throw new NotANumberError(n);
        }
        // return Math.abs(n);
        return n < 0 ? -n : n;
    });
}