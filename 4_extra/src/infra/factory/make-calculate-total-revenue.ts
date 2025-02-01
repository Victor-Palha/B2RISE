import { CalculateTotalRevenueUseCase } from "../../domain/sales/use-cases/calculate-total-revenue-use-case";
import { SQLiteSalesRepository } from "../repositories/sqlite-sales-repository";
import { DATABASE } from "../sqlite/connection";

export function makeCalculateTotalRevenue() {
    const repository = new SQLiteSalesRepository(DATABASE);
    const service = new CalculateTotalRevenueUseCase(repository);
    return service;
}