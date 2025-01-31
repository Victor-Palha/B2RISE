import { TransactionEntity } from "../../domain/transactions/entity/transaction-entity";
import { GetHighTransactionMonthsResponse, TransactionRepository } from "../../domain/transactions/repositories/transaction-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

export class SQLiteTransactionsRepository extends SQLiteBaseRepository implements TransactionRepository {
    constructor(
        private database: SQLite
    ){
        super();
    }

    public async create(transactionEntity: TransactionEntity){
        const transaction = transactionEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO transactions (account_id, transaction_date, amount) VALUES (?, ?, ?)`
        );
        insert.run(transaction.accountId, transaction.transactionDate, transaction.amount);
    }

    public async createMonthlySummaryView(){
        const query = `
            CREATE VIEW IF NOT EXISTS monthly_summary AS
            SELECT 
                account_id,
                strftime('%Y-%m', transaction_date) AS month,
                SUM(amount) AS total_amount
            FROM transactions
            GROUP BY account_id, month
        `;
        
        this.database.exec(query);
    }

    public async getHighTransactionMonths(){
        const query = this.database.prepare(`
            SELECT * FROM monthly_summary
            WHERE total_amount > 10000
        `);
        const result = query.all()
        return this.mapperFromDBToPresenter<GetHighTransactionMonthsResponse>(result);
    }
}