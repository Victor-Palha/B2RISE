export class SalesEntity {
    constructor(
        private product: string,
        private quantity: number,
        private price: number,
        private id?: number
    ) {}

    get toDTO() {
        return {
            product: this.product,
            quantity: this.quantity,
            price: this.price
        }
    }
}