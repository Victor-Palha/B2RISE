export class EmployerEntity {
    constructor(
        private name: string,
        private salary: number,
        private id?: number
    ){}

    get toDto(){
        return {
            name: this.name,
            salary: this.salary
        }
    }
}