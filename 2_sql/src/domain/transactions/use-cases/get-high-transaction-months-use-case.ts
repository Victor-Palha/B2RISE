import { GetHighTransactionMonthsResponse, TransactionRepository } from "../repositories/transaction-repository";

export class GetHighTransactionMonthsUseCase {
    constructor(
        private transactionRepository: TransactionRepository
    ) {}
    async execute(): Promise<GetHighTransactionMonthsResponse[]> {
        await this.transactionRepository.createMonthlySummaryView();
        return this.transactionRepository.getHighTransactionMonths();
    }
}