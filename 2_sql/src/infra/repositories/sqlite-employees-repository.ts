import { EmployerEntity } from "../../domain/employees/entity/employees-entity";
import { EmployeesRepository } from "../../domain/employees/repositories/employees-repository";
import { SQLite } from "../sqlite/connection";

export class SQLiteEmployeesRepository implements EmployeesRepository {
    constructor(
        private readonly database: SQLite
    ){}

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