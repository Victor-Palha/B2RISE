import { CategoryEntity } from '../entities/category-entity';
export type FindCategoriesWithTotalSalesAboveThresholdResponse = {
    category_name: string
    product_name: string
    total_sold: number
}
export abstract class CategoryRepository {
    /**
     * Creates a new category in the database.
     * @param {CategoryEntity} categoryEntity - The category entity to be inserted.
     * @returns {Promise<void>} A promise that resolves when the category is inserted.
    */
    abstract create(category: CategoryEntity): Promise<void>;
    /**
     * Finds categories where the total sales exceed a given threshold.
     * @param {number} threshold - The minimum total sales required to filter categories.
     * @returns {Promise<FindCategoriesWithTotalSalesAboveThresholdResponse[]>} A promise resolving to an array of category sales data.
    */
    abstract findCategoriesWithTotalSalesAboveThreshold(threshold: number): Promise<FindCategoriesWithTotalSalesAboveThresholdResponse[]>;
}