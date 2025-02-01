import { CustomerEntity } from "../entities/customer-entity";
export type FindCustomersWithTotalOrdersResponse = {
    id: number
    name: string
    total: number
}
export abstract class CustomerRepository {
    /**
     * Creates a new customer in the database.
     * @param {CustomerEntity} customerEntity - The customer entity to be inserted.
     * @returns {Promise<void>} A promise that resolves when the customer is inserted.
    */
    abstract create(data: CustomerEntity): Promise<void>
    /**
     * Finds customers with their total order amounts.
     * @returns {Promise<FindCustomersWithTotalOrdersResponse[]>} A promise resolving to an array of customer order totals.
    */
    abstract findCustomersWithTotalOrders(): Promise<FindCustomersWithTotalOrdersResponse[]>
}