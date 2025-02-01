import { AdjustSalariesBelowThresholdUseCase } from "../../domain/employees/use-cases/adjust-salaries-below-threshold-use-case";
import { SQLiteEmployeesRepository } from "../repositories/sqlite-employees-repository";
import { DATABASE } from "../sqlite/connection";

export function makeAdjustSalariesBelowthreshold(){
    const repository = new SQLiteEmployeesRepository(DATABASE);
    const service = new AdjustSalariesBelowThresholdUseCase(repository);
    return service;
}