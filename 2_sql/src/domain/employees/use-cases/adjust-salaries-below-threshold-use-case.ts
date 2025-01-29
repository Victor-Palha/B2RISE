import { EmployeesRepository } from "../repositories/employees-repository";

export class AdjustSalariesBelowThresholdUseCase {
    constructor(
        private readonly employeesRepository: EmployeesRepository
    ){}

    public async execute(threshold: number = 5_000){
        return this.employeesRepository.adjustSalariesBelowThreshold(threshold);
    }
}