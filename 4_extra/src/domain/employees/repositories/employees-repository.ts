import { EmployerEntity } from "../entity/employer-entity";

export abstract class EmployeesRepository {
    /**
     * Creates a new employee in the database.
     * @param {EmployerEntity} employerEntity - The employee entity to be inserted.
     * @returns {Promise<void>} A promise that resolves when the employee is inserted.
    */
    abstract create(employer: EmployerEntity): Promise<void>;
    /**
     * Retrieves all employees from the database.
     * @returns {Promise<EmployerEntity[]>} A promise resolving to an array of employees.
    */
    abstract findAllEmployees(): Promise<EmployerEntity[]>;
    /**
     * Adjusts salaries for employees earning below the specified threshold.
     * Increases salary by 10% and rounds to two decimal places.
     * @param {number} threshold - The salary threshold for adjustments.
     * @returns {Promise<void>} A promise that resolves when the update is completed.
    */
    abstract adjustSalariesBelowThreshold(threshold: number): Promise<void>;
}