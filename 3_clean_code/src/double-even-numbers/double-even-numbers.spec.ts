import { describe, expect, it } from "vitest";
import { doubleEvenNumbers } from "./double-even-numbers";

describe("doubleEvenNumbers", () => {
    it("should double even numbers in the array", () => {
        // Arrange
        const numbers = [1, 2, 3, 4, 5, 6];

        // Act
        const result = doubleEvenNumbers(numbers);

        // Assert
        expect(result).toEqual([4, 8, 12]);
    });

    it("should return an empty array if there are no even numbers", () => {
        // Arrange
        const numbers = [1, 3, 5, 7];

        // Act
        const result = doubleEvenNumbers(numbers);

        // Assert
        expect(result).toEqual([]);
    });

    it("should return an empty array if the input array is empty", () => {
        // Arrange
        const numbers: number[] = [];

        // Act
        const result = doubleEvenNumbers(numbers);

        // Assert
        expect(result).toEqual([]);
    });

    it("should handle negative even numbers", () => {
        // Arrange
        const numbers = [-2, -4, -6, -7];

        // Act
        const result = doubleEvenNumbers(numbers);

        // Assert
        expect(result).toEqual([-4, -8, -12]); // -2*2=-4, -4*2=-8, -6*2=-12
    });

    it("should not return zero as even", () => {
        // Arrange
        const numbers = [0, 1, 2, 3];

        // Act
        const result = doubleEvenNumbers(numbers);

        // Assert
        expect(result).toEqual([4]); // 2*2=4
    });

    it("should handle large even numbers", () => {
        // Arrange
        const numbers = [1000, 1001, 1002];

        // Act
        const result = doubleEvenNumbers(numbers);

        // Assert
        expect(result).toEqual([2000, 2004]); // 1000*2=2000, 1002*2=2004
    });
});