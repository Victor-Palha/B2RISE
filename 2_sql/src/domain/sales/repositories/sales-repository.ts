import { SalesEntity } from "../entities/sales-entity";
export type CalculateTotalRevenueByProductResponse = {
    product: string;
    total: number;
};

export abstract class SalesRepository {
    abstract create(salesEntity: SalesEntity): Promise<void>;
    abstract calculateTotalRevenueByProduct(): Promise<CalculateTotalRevenueByProductResponse[]>;
}