export class OrderEntity {
    constructor(
        private total: number,
        private customerId: number,
        private id?: number
    ){}

    get toDto() {
        return {
            total: this.total,
            customerId: this.customerId
        }
    }
}