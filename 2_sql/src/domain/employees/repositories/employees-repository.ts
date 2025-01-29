import { EmployerEntity } from "../entity/employees-entity";

export abstract class EmployeesRepository {
    abstract create(employer: EmployerEntity): Promise<void>;
    abstract findAllEmployees(): Promise<EmployerEntity[]>;
    abstract adjustSalariesBelowThreshold(threshold: number): Promise<void>;
}