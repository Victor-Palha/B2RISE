import { describe, expect, it } from "vitest";
import { filterExpensiveProducts } from "./filter-expensive-products";
describe("Filter expensive products", () => {

    it("should return products with price above threshold", () => {
        // Arrange
        const products = [
            { price: 50, name: "product1" },
            { price: 150, name: "product2" },
            { price: 200, name: "product3" },
        ];
        const threshold = 100;
        // Act
        const itemsWithPriceAboveThreshold = filterExpensiveProducts(products, threshold);
        // Assert
        expect(itemsWithPriceAboveThreshold).toEqual([
            { price: 150, name: "product2" },
            { price: 200, name: "product3" },
        ]);
    });

    it("should return empty array when no products with price above threshold", () => {
        // Arrange
        const products = [
            { price: 50, name: "product1" },
            { price: 80, name: "product2" },
        ];
        const threshold = 100;
        // Act
        const itemsWithPriceAboveThreshold = filterExpensiveProducts(products, threshold);
        // Assert
        expect(itemsWithPriceAboveThreshold).toEqual([]);
    });

    it("should return empty array when no products", () => {
        // Arrange
        const products = [] as any[];
        const threshold = 100;
        // Act
        const itemsWithPriceAboveThreshold = filterExpensiveProducts(products, threshold);
        // Assert
        expect(itemsWithPriceAboveThreshold).toEqual([]);
    });

    it("should be able to use default threshold", () => {
        // Arrange
        const products = [
            { price: 50, name: "product1" },
            { price: 150, name: "product2" },
            { price: 200, name: "product3" },
        ];
        // Act
        const itemsWithPriceAboveThreshold = filterExpensiveProducts(products);
        // Assert
        expect(itemsWithPriceAboveThreshold).toEqual([
            { price: 150, name: "product2" },
            { price: 200, name: "product3" },
        ]);
    });
})