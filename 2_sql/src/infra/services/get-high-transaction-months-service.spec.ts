import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { getHighTransactionMonthsService } from "./get-high-transaction-months-service";

describe("Get high transactions by months service", () => {
    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })

    beforeEach(() => {
        DATABASE.exec(`
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                account_id INTEGER,
                transaction_date TEXT,
                amount REAL)
        `);

        DATABASE.exec(`
            INSERT INTO transactions (account_id, transaction_date, amount) VALUES
                (1, '2025-01-05 07:30:00.000', 5000),
                (1, '2025-01-15 11:45:00.000', 6000),
                (1, '2025-02-15 11:45:00.000', 10000),

                (2, '2025-01-10 05:15:00.000', 3000),
                (2, '2025-01-20 09:00:00.000', 4000),
                (2, '2025-01-25 13:30:00.000', 5000),

                (3, '2025-02-05 06:20:00.000', 2000),
                (3, '2025-02-15 10:00:00.000', 1500),

                (4, '2025-03-10 08:45:00.000', 12000),

                (5, '2025-01-05 04:30:00.000', 8000),
                (5, '2025-01-25 11:10:00.000', 3000)
        `);
    })

    afterEach(() => {
        DATABASE.exec(`DROP TABLE IF EXISTS transactions`);
    })

    it("should return a list of high transactions by month", async () => {
        const highTransactions = await getHighTransactionMonthsService();
        expect(highTransactions).toEqual([
            { account_id: 1, month: "2025-01", total_amount: 11000 },
            { account_id: 2, month: "2025-01", total_amount: 12000 },
            { account_id: 4, month: "2025-03", total_amount: 12000 },
            { account_id: 5, month: "2025-01", total_amount: 11000 }
        ]);
    });

    it("should return an empty array if no transactions exceed 10,000", async () => {
        DATABASE.exec(`DELETE FROM transactions WHERE amount >= 3000`);

        const highTransactions = await getHighTransactionMonthsService();
        expect(highTransactions).toEqual([]);
    });
});