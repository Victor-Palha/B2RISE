export class ProductEntity {
    constructor(
        private name: string,
        private categoryId: number,
        private id?: number,
    ){}

    get toDto() {
        return {
            name: this.name,
            categoryId: this.categoryId
        }
    }
}