import { CustomerEntity } from "../../domain/orders/entities/customer-entity";
import { CustomerRepository, FindCustomersWithTotalOrdersResponse } from "../../domain/orders/repositories/customer-repository";
import { SQLite } from "../sqlite/connection";

export class SQLiteCustomerRepository implements CustomerRepository {
    constructor(
        private readonly database: SQLite
    ) {}

    async create(customerEntity: CustomerEntity): Promise<void> {
        const customer = customerEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO customers (name, country) VALUES (?, ?)`
        );
        insert.run(customer.name, customer.country);
    }

    async findCustomersWithTotalOrders(): Promise<FindCustomersWithTotalOrdersResponse[]> {
        const query = this.database.prepare(`
            SELECT c.id, c.name, SUM(o.total) AS total 
            FROM customers c 
            JOIN orders o ON c.id = o.customer_id 
            GROUP BY c.id, c.name 
            ORDER BY total DESC
        `);
        const result = query.all();
        const fixedResult: FindCustomersWithTotalOrdersResponse[] = [];
        for (const total of result) {
            fixedResult.push(Object.create(Object.prototype, Object.getOwnPropertyDescriptors(total)));
        }
        return fixedResult
    }
}