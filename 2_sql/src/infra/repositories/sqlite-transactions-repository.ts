import { TransactionEntity } from "../../domain/categories/entities/transaction-entity";
import { TransactionRepository } from "../../domain/categories/repositories/transaction-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

export class SQLiteTransactionsRepository extends SQLiteBaseRepository implements TransactionRepository {
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