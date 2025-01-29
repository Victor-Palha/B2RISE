import { NotANumberError } from "./error/not-a-number-error";

/**
 * Converts all numbers in an array to their absolute positive values.
 *
 * @param {number[]} numbers - An array of numbers to be converted.
 * @returns {number[]} - A new array where all numbers are positive.
 *
 * @throws {NotANumberError} If any element in the array is not a valid number (e.g., NaN, Infinity, -Infinity, or a non-numeric value).
 *
 * @example
 * // Basic usage with positive and negative numbers
 * makeAllPositives([-1, 2, -3, 4, -5]); // Returns: [1, 2, 3, 4, 5]
 * 
 * @example
 * // Throws error for non-number values
 * try {
 *   makeAllPositives([1, "two", 3]);
 * } catch (error) {
 *   console.error(error.message); // NotANumberError: Invalid value: two
 * }
 *
 * @example
 * // Throws error for NaN and Infinity values
 * try {
 *   makeAllPositives([1, NaN, 3, Infinity]);
 * } catch (error) {
 *   console.error(error.message); // NotANumberError
 * }
 */

export function makeAllPositives(numbers: number[]): number[] {
    return numbers.map(n => {
        if(typeof n !== "number" || isNaN(n) || n === Infinity || n === -Infinity) {
            throw new NotANumberError(n);
        }
        // return Math.abs(n);
        return n < 0 ? -n : n;
    });
}