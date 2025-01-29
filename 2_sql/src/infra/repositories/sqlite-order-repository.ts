import { OrderEntity } from "../../domain/orders/entities/order-entity";
import { OrderRepository } from "../../domain/orders/repositories/orders-repository";
import { SQLite } from "../sqlite/connection";

export class SQLiteOrderRepository implements OrderRepository {
    constructor(
        private readonly database: SQLite
    ){}

    async create(orderEntity: OrderEntity) {
        const order = orderEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO orders (total, customer_id) VALUES (?, ?)`
        );
        insert.run(order.total, order.customerId);
    }
}