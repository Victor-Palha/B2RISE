import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
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

    beforeEach(() => {
        DATABASE.exec(`
            CREATE TABLE IF NOT EXISTS sales (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                product TEXT,
                quantity INTEGER,
                price REAL)
        `);

        DATABASE.exec(`
            INSERT INTO sales (product, quantity, price) VALUES
            ('Prego', 10, 1.5),
            ('Martelo', 5, 10.0),
            ('Serra', 2, 30.0),
            ('Parafuso', 100, 0.5),
            ('Furadeira', 1, 150.0),
            ('Trena', 3, 20.0),
            ('Alicate', 5, 15.0),
            ('Chave de fenda', 10, 5.0)
        `);
    })

    afterEach(() => {
        DATABASE.exec(`DROP TABLE IF EXISTS sales`);
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