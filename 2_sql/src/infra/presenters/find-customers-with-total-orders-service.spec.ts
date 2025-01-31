import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { findCustomersWithTotalOrdersService } from "./find-customers-with-total-orders-service";

describe("Find customers with total orders", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })

    beforeEach(() => {
        DATABASE.exec(`
            CREATE TABLE IF NOT EXISTS customers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                country TEXT)
        `);

        DATABASE.exec(`
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                total REAL,
                customer_id INTEGER,
                FOREIGN KEY(customer_id) REFERENCES customers(id))
        `);

        DATABASE.exec(`
            INSERT INTO customers (id, name, country) VALUES
            (1, 'John', 'USA'),
            (2, 'Doe', 'ITA'),
            (3, 'Jane', 'BRA'),
            (4, 'Jim', 'USA'),
            (5, 'James', 'USA'),
            (6, 'Johnathan', 'BRA'),
            (7, 'Jimmy', 'CHI'),
            (8, 'Jenny', 'JAP')
        `);

        DATABASE.exec(`
            INSERT INTO orders (total, customer_id) VALUES
            (29.50, 1),
            (31.99, 2),
            (42.10, 3),
            (30.00, 4),
            (38.33, 5),
            (104.99, 6),
            (15.00, 7),
            (299.99, 1),
            (42.42, 2),
            (57.90, 3)
        `);
    })

    afterEach(() => {
        DATABASE.exec(`DROP TABLE IF EXISTS orders`);
        DATABASE.exec(`DROP TABLE IF EXISTS customers`);
    })

    it("should return a list of customers with total orders", async () => {
        const result = await findCustomersWithTotalOrdersService();
        expect(result.length).toBe(7);
        expect(result).toEqual([
            { id: 1, name: 'John', total: 329.49 },
            { id: 6, name: 'Johnathan', total: 104.99 },
            { id: 3, name: 'Jane', total: 100 },
            { id: 2, name: 'Doe', total: 74.41 },
            { id: 5, name: 'James', total: 38.33 },
            { id: 4, name: 'Jim', total: 30 },
            { id: 7, name: 'Jimmy', total: 15 }
          ])
    });
});