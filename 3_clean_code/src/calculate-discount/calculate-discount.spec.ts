import { describe, expect, it } from "vitest";
import { calculateDiscount } from "./calculate-discount";

describe("calculateDiscount", () => {
    it("should apply 10% discount for non-premium users when price is eligible", () => {
        // Arrange
        const price = 150;
        const isPremium = false;

        // Act
        const result = calculateDiscount(price, isPremium);

        // Assert
        expect(result).toBe(135);
    });

    it("should not apply discount for non-premium users when price is not eligible", () => {
        // Arrange
        const price = 80;
        const isPremium = false;

        // Act
        const result = calculateDiscount(price, isPremium);

        // Assert
        expect(result).toBe(80);
    });

    it("should apply 20% discount for premium users when price is eligible", () => {
        // Arrange
        const price = 150;
        const isPremium = true;

        // Act
        const result = calculateDiscount(price, isPremium);
        // Assert
        expect(result).toBe(120);
    });

    it("should apply 10% discount for premium users when price is not eligible", () => {
        // Arrange
        const price = 80;
        const isPremium = true;

        // Act
        const result = calculateDiscount(price, isPremium);

        // Assert
        expect(result).toBe(72);
    });

    it("should handle price exactly at the eligibility threshold for non-premium users", () => {
        // Arrange
        const price = 100;
        const isPremium = false;

        // Act
        const result = calculateDiscount(price, isPremium);

        // Assert
        expect(result).toBe(100);
    });

    it("should handle price exactly at the eligibility threshold for premium users", () => {
        // Arrange
        const price = 100;
        const isPremium = true;

        // Act
        const result = calculateDiscount(price, isPremium);

        // Assert
        expect(result).toBe(90);
    });

    it("should throw an error when price is negative", () => {
        // Arrange
        const price = -50;
        const isPremium = true;
    
        // Act & Assert
        expect(() => calculateDiscount(price, isPremium)).toThrow(
            new Error("Price cannot be 0 or negative")
        );
    });
    
    it("should throw an error when price is zero", () => {
        // Arrange
        const price = 0;
        const isPremium = true;
    
        // Act & Assert
        expect(() => calculateDiscount(price, isPremium)).toThrow(
            new Error("Price cannot be 0 or negative")
        );
    });
});