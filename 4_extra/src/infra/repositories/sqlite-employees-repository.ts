import { EmployerEntity } from "../../domain/employees/entity/employer-entity";
import { EmployeesRepository } from "../../domain/employees/repositories/employees-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository for handling employee-related operations in an SQLite database.
 * Extends the SQLiteBaseRepository and implements EmployeesRepository.
 */
export class SQLiteEmployeesRepository extends SQLiteBaseRepository implements EmployeesRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

    public async create(employerEntity: EmployerEntity){
        const employer = employerEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO employees (name, salary) VALUES (?, ?)`
        );
        insert.run(employer.name, employer.salary);
    }

    public async findAllEmployees(){
        const select = this.database.prepare(
            `SELECT * FROM employees`
        );
        const result = select.all();
        return result.map((employer: any) => new EmployerEntity(employer.name, employer.salary, employer.id));
    }

    public async adjustSalariesBelowThreshold(threshold: number){
        const update = this.database.prepare(
            `UPDATE employees SET salary = ROUND(salary * 1.10, 2) WHERE salary < ?`
        );
        update.run(threshold);
    }
}