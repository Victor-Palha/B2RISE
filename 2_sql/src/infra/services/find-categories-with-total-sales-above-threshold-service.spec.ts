import {beforeAll, describe, expect, it} from "vitest";
import { SQLite } from "../sqlite/connection";
import { findCategoriesWithTotalSalesAboveThresholdService } from "./find-categories-with-total-sales-above-threshold-service";

describe("Find categories with total sales aboce threshold", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })

    it("should return a list of categories with total sales above threshold default (100)", async () => {
        const result = await findCategoriesWithTotalSalesAboveThresholdService();
        expect(result.length).toBe(4);
        expect(result).toEqual([
            {
              category_name: 'LIMPEZA',
              product_name: 'Detergente',
              total_sold: 230
            },
            {
              category_name: 'ALIMENTAÇÃO',
              product_name: 'Arroz',
              total_sold: 150
            },
            {
              category_name: 'ELETRÔNICOS',
              product_name: 'Notebook',
              total_sold: 399
            },
            {
              category_name: 'ELETRÔNICOS',
              product_name: 'Tablet',
              total_sold: 122
            }
          ])
    });

    it("should return categories with total sales above custom threshold", async () => {
        const result = await findCategoriesWithTotalSalesAboveThresholdService(300);

        expect(result).toEqual([
            {
                category_name: 'ELETRÔNICOS',
                product_name: 'Notebook',
                total_sold: 399
            }
        ]);
    });

    it("should return an empty list if no category exceeds the threshold", async () => {
        const result = await findCategoriesWithTotalSalesAboveThresholdService(500);
        expect(result).toEqual([]);
    });
})