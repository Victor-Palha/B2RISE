import { CalculateTotalRevenueByProductResponse, SalesRepository } from "../repositories/sales-repository";

export class CalculateTotalRevenueUseCase {
  constructor(private readonly salesRepository: SalesRepository) {}

  async execute(): Promise<CalculateTotalRevenueByProductResponse[]> {
    return await this.salesRepository.calculateTotalRevenueByProduct();
  }
}