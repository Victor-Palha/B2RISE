import { beforeAll, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { findCustomersWithTotalOrdersService } from "./find-customers-with-total-orders-service";

describe("Find customers with total orders", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
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