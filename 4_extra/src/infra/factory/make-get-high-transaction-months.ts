import { GetHighTransactionMonthsUseCase } from "../../domain/transactions/use-cases/get-high-transaction-months-use-case";
import { SQLiteTransactionsRepository } from "../repositories/sqlite-transactions-repository";
import { DATABASE } from "../sqlite/connection";

export function makeGetHighTransactionMonths(){
    const repository = new SQLiteTransactionsRepository(DATABASE);
    const service = new GetHighTransactionMonthsUseCase(repository);
    return service;
}