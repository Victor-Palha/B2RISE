import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { SQLite } from "../sqlite/connection";
import { AdjustSalariesBelowthresholdService } from "./adjust-salaries-below-threshold-service";


type Employer = {
    id: number;
    name: string;
    salary: number;
}

describe("Adjust Salaries Below Threshold Service", () => {

    let DATABASE: SQLite;
    
    beforeAll(() => {
        DATABASE = new SQLite();
    })

    beforeEach(() => {
        DATABASE.exec(`
            CREATE TABLE IF NOT EXISTS employees (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                salary REAL
            )
        `);
    
        DATABASE.exec(`
            INSERT INTO employees (name, salary) VALUES
            ('John', 1250),
            ('Doe', 1500),
            ('Jane', 5000),
            ('Jim', 5500),
            ('James', 6000),
            ('Johnathan', 3500),
            ('Jimmy', 4000),
            ('Jenny', 4500)
        `);
    });
    
    afterEach(() => {
        DATABASE.exec(`DROP TABLE IF EXISTS employees`);
    });

    it("should be adjusted to 10% of the current salary if it is below 5000", async () => {
        const queryToGetEmployer = DATABASE.prepare(`SELECT * FROM employees WHERE id = ?`);
        const employerWithSalaryBellowThresholdBefore = queryToGetEmployer.get(1) as Employer;
        const employerWithSalaryAboveThresholdBefore = queryToGetEmployer.get(3) as Employer;

        expect(employerWithSalaryBellowThresholdBefore.salary).toBe(1250);
        expect(employerWithSalaryAboveThresholdBefore.salary).toBe(5000);

        await AdjustSalariesBelowthresholdService();

        const employerWithSalaryBellowThresholdAfter = queryToGetEmployer.get(1) as Employer;
        const employerWithSalaryAboveThresholdAfter = queryToGetEmployer.get(3) as Employer;
        // 10% of 1250 is 125 so the salary should be 1375
        expect(employerWithSalaryBellowThresholdAfter.salary).toBe(1375);
        expect(employerWithSalaryAboveThresholdAfter.salary).toBe(5000);
    });

    it("should not adjust salaries if they are already above 5000", async () => {
        const queryToGetEmployer = DATABASE.prepare(`SELECT * FROM employees WHERE id = ?`);
        const employerWithSalaryAboveThresholdBefore = queryToGetEmployer.get(3) as Employer;

        expect(employerWithSalaryAboveThresholdBefore.salary).toBe(5000);

        await AdjustSalariesBelowthresholdService();

        const employerWithSalaryAboveThresholdAfter = queryToGetEmployer.get(3) as Employer;
        // 10% of 5000 is 500 so the salary bonus should be 5500, but it should remain 5000 since it is already above the threshold
        expect(employerWithSalaryAboveThresholdAfter.salary).toBe(5000);
    });

    it("should be able to ajust threshold for different values", async () => {
        const queryToGetEmployer = DATABASE.prepare(`SELECT * FROM employees WHERE id = ?`);
        const employerWithSalaryBellowThresholdBefore = queryToGetEmployer.get(3) as Employer;

        expect(employerWithSalaryBellowThresholdBefore.salary).toBe(5000);

        await AdjustSalariesBelowthresholdService(6000);

        const employerWithSalaryBellowThresholdAfter = queryToGetEmployer.get(3) as Employer;
        // 10% of 5000 is 500 so the salary should be 5500
        expect(employerWithSalaryBellowThresholdAfter.salary).toBe(5500);
    })
});