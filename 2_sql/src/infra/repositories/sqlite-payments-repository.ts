import { PaymentEntity } from "../../domain/categories/entities/payment-entity";
import { PaymentRepository } from "../../domain/categories/repositories/payment-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository for handling payment-related operations in an SQLite database.
 * Extends the SQLiteBaseRepository and implements PaymentRepository.
 */
export class SQLitePaymentsRepository extends SQLiteBaseRepository implements PaymentRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

    async create(paymentEntity: PaymentEntity) {
        const payment = paymentEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO payments (quantity, product_id) VALUES (?, ?)`
        );
        insert.run(payment.quantity, payment.productId);
    }
}