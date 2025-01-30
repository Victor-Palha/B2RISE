import { TransactionEntity } from '../entities/transaction-entity';
export abstract class TransactionRepository {
    abstract create(transcation: TransactionEntity): Promise<void>;
}