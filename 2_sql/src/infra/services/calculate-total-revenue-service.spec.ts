import { beforeAll, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { calculateTotalRevenueService } from "./calculate-total-revenue-service";

type Sales = {
    id: number;
    product: string;
    quantity: number;
    price: number;
}

describe("Calculate Total Revenue Service", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })
    
    it("should calculate the total revenue of all sales by product", async () => {
        const queryToGetSales = DATABASE.prepare(`SELECT * FROM sales`);
        const sales = queryToGetSales.all() as Sales[];

        const alicate = sales.find(sale => sale.product === 'Alicate');
        expect(alicate?.quantity).toBe(5);
        expect(alicate?.price).toBe(15);

        const totalRevenue = await calculateTotalRevenueService();
        const alicateTotal = totalRevenue.find(item => item.product === 'Alicate');
        expect(alicateTotal?.total).toBe(75);
    });
});