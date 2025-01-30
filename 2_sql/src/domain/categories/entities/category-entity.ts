export class CategoryEntity {
    constructor(
        private name: string,
        private id?: number,
    ){}

    get toDto() {
        return {
            name: this.name
        }
    }
}