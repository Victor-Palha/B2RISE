export class UserEntity {
    constructor(
        private name: string,
        private email: string,
        private id?: number
    ){}

    get toDTO() {
        return {
            name: this.name,
            email: this.email
        }
    }
}