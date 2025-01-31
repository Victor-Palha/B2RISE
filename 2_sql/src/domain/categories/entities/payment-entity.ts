export class PaymentEntity {
    constructor(
        private productId: number,
        private quantity: number,
        private id?: number,
    ){}

    get toDto() {
        return {
            productId: this.productId,
            quantity: this.quantity
        }
    }
}