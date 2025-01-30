import { beforeAll, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { findCustomersWithTotalOrdersService } from "./find-customers-with-total-orders-service";
import { identifyDuplicateEmailsService } from "./identify-duplicate-email-service";

describe("Identify duplicate email service", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })

    it("should return a list of customers with total orders", async () => {
        const result = await identifyDuplicateEmailsService();
        expect(result.length).toBe(2);
        expect(result).toEqual([
            { email: 'jim@test.com', count: 3 },
            { email: 'john@test.com', count: 2 }
        ]);
    });
});