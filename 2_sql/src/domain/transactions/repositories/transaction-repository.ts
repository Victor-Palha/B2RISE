import { TransactionEntity } from "../entity/transaction-entity";

export type GetHighTransactionMonthsResponse = { 
    account_id: number; 
    month: string; 
    total_amount: number 
};

export abstract class TransactionRepository {
    public abstract create(transaction: TransactionEntity): Promise<void>;
    public abstract createMonthlySummaryView(): Promise<void>;
    public abstract getHighTransactionMonths(): Promise<GetHighTransactionMonthsResponse[]>;
}