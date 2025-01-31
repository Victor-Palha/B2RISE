import { SalesEntity } from "../entities/sales-entity";
export type CalculateTotalRevenueByProductResponse = {
    product: string;
    total: number;
};

export abstract class SalesRepository {
    /**
     * Creates a new sales entry in the database.
     * @param {SalesEntity} salesEntity - The sales entity to be inserted.
     * @returns {Promise<void>} A promise that resolves when the sales record is inserted.
    */
    abstract create(salesEntity: SalesEntity): Promise<void>;
    /**
     * Calculates the total revenue by product.
     * @returns {Promise<CalculateTotalRevenueByProductResponse[]>} A promise resolving to an array of revenue per product.
    */
    abstract calculateTotalRevenueByProduct(): Promise<CalculateTotalRevenueByProductResponse[]>;
}