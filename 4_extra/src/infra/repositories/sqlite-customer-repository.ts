import { CustomerEntity } from "../../domain/orders/entities/customer-entity";
import { CustomerRepository, FindCustomersWithTotalOrdersResponse } from "../../domain/orders/repositories/customer-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository for handling customer-related operations in an SQLite database.
 * Extends the SQLiteBaseRepository and implements CustomerRepository.
 */
export class SQLiteCustomerRepository extends SQLiteBaseRepository implements CustomerRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
    constructor(
        private readonly database: SQLite
    ) {
        super();
    }

    public async create(customerEntity: CustomerEntity) {
        const customer = customerEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO customers (name, country) VALUES (?, ?)`
        );
        insert.run(customer.name, customer.country);
    }

    public async findCustomersWithTotalOrders() {
        const query = this.database.prepare(`
            SELECT c.id, c.name, SUM(o.total) AS total 
            FROM customers c 
            JOIN orders o ON c.id = o.customer_id 
            GROUP BY c.id, c.name 
            ORDER BY total DESC
        `);
        const result = query.all();
        return this.mapperFromDBToPresenter<FindCustomersWithTotalOrdersResponse>(result);
    }
}