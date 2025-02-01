import { FindCategoriesWithTotalSalesAboveThresholdUseCase } from "../../domain/categories/use-cases/find-categories-with-total-sales-above-threshold-use-case";
import { SQLiteCategoriesRepository } from "../repositories/sqlite-categories-repository";
import { DATABASE } from "../sqlite/connection";

export function makeFindCategoriesWithTotalSalesAboveThreshold(){
    const repository = new SQLiteCategoriesRepository(DATABASE);
    const service = new FindCategoriesWithTotalSalesAboveThresholdUseCase(repository);
    return service;
}