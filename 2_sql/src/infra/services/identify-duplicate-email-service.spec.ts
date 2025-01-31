import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { identifyDuplicateEmailsService } from "./identify-duplicate-email-service";

describe("Identify duplicate email service", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })

    beforeEach(() => {
        DATABASE.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT)
        `);

        DATABASE.exec(`
            INSERT INTO users (name, email) VALUES
            ('John', 'john@test.com'),
            ('Doe', 'doe@test.com'),
            ('Jane', 'jane@test.com'),
            ('Jim', 'jim@test.com'),
            ('James', 'james@test.com'),
            ('Johnathan', 'john@test.com'),
            ('Jimmy', 'jim@test.com'),
            ('Jenny', 'jim@test.com')
        `);
    })

    afterEach(() => {
        DATABASE.exec(`DROP TABLE IF EXISTS users`);
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