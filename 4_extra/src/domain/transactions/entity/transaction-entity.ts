export class TransactionEntity {
    constructor(
        private accountId: number,
        private transactionDate: Date,
        private amount: number,
        private id?: number
    ){}

    get toDto(){
        return {
            accountId: this.accountId,
            transactionDate: this.formatDateToISO8601(this.transactionDate),
            amount: this.amount
        }
    }

    private formatDateToISO8601(date: Date): string {
        const hour = 60 * 60 * 1000; // 1 hours in milliseconds
        const adjustedDate = new Date(date.getTime() - (hour * 3)); // Adjusted to UTC-3
        return adjustedDate.toISOString().replace("T", " ").slice(0, -1);
    }
}