import { TransactionEntity } from "../../domain/categories/entities/transaction-entity";
import { TransactionRepository } from "../../domain/categories/repositories/transaction-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository for handling transaction-related operations in an SQLite database.
 * Extends the SQLiteBaseRepository and implements TransactionRepository.
 */
export class SQLiteTransactionsRepository extends SQLiteBaseRepository implements TransactionRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

    async create(transactionEntity: TransactionEntity) {
        const transaction = transactionEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO transactions (quantity, product_id) VALUES (?, ?)`
        );
        insert.run(transaction.quantity, transaction.productId);
    }
}