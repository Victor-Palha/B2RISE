import { FindCustomersWithTotalOrdersUseCase } from "../../domain/orders/use-cases/find-customers-with-total-orders-use-case";
import { SQLiteCustomerRepository } from "../repositories/sqlite-customer-repository";
import { DATABASE } from "../sqlite/connection";

export function makeFindCustomersWithTotalOrders() {
    const repository = new SQLiteCustomerRepository(DATABASE);
    const service = new FindCustomersWithTotalOrdersUseCase(repository);
    return service;
}