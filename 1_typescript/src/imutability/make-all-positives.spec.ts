import { describe, expect, it } from "vitest";
import { makeAllPositives } from "./make-all-positives";
import { NotANumberError } from "./error/not-a-number-error";

describe("Make all numbers positives", () => {
    it("should be able to make all numbers positive", () => {
        const numbers = [-1, 2, -3, 4, -5];
        const result = makeAllPositives(numbers);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("should throw an error if a number is not a number", () => {
        const numbers = [1, 2, 3, "four", 5];
        expect(() => makeAllPositives(numbers as any)).toThrow(NotANumberError);
    });

    it("should handle floats correctly", () => {
        const numbers = [-1.5, 2.5, -3.7];
        const result = makeAllPositives(numbers);
        expect(result).toEqual([1.5, 2.5, 3.7]);
    });

    it("should work with large positive and negative numbers", () => {
        const numbers = [-1000000, 500000, -999999];
        const result = makeAllPositives(numbers);
        expect(result).toEqual([1000000, 500000, 999999]);
    });

    it("should throw a NotANumberError if an element is NaN", () => {
        const numbers = [1, NaN, 3];
        expect(() => makeAllPositives(numbers)).toThrow(NotANumberError);
    });

    it("should throw a NotANumberError if an element is Infinity", () => {
        const numbers = [1, Infinity, 3];
        expect(() => makeAllPositives(numbers)).toThrow(NotANumberError);
    });
})