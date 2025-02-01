import { CustomerRepository } from "../repositories/customer-repository";

export class FindCustomersWithTotalOrdersUseCase {
    constructor(
        private readonly customerRepository: CustomerRepository
    ){}

    public async execute(){
        return this.customerRepository.findCustomersWithTotalOrders();
    }
}