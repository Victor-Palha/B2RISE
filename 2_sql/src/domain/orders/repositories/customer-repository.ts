import { CustomerEntity } from "../entities/customer-entity";
export type FindCustomersWithTotalOrdersResponse = {
    id: number
    name: string
    total: number
}
export abstract class CustomerRepository {
    abstract create(data: CustomerEntity): Promise<void>
    abstract findCustomersWithTotalOrders(): Promise<FindCustomersWithTotalOrdersResponse[]>
}