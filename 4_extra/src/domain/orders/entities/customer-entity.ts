export class CustomerEntity {
    constructor(
        private name: string,
        private country: string,
        private id?: number
    ){}

    get toDto() {
        return {
            name: this.name,
            country: this.country
        }
    }
}