import { OrderEntity } from "../../domain/orders/entities/order-entity";
import { OrderRepository } from "../../domain/orders/repositories/orders-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository for handling order-related operations in an SQLite database.
 * Extends the SQLiteBaseRepository and implements OrderRepository.
 */
export class SQLiteOrderRepository extends SQLiteBaseRepository implements OrderRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

    public async create(orderEntity: OrderEntity) {
        const order = orderEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO orders (total, customer_id) VALUES (?, ?)`
        );
        insert.run(order.total, order.customerId);
    }
}