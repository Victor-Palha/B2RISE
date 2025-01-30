import { CategoryEntity } from '../entities/category-entity';
export type FindCategoriesWithTotalSalesAboveThresholdResponse = {
    category_name: string
    product_name: string
    total_sold: number
}
export abstract class CategoryRepository {
    abstract create(category: CategoryEntity): Promise<void>;
    abstract findCategoriesWithTotalSalesAboveThreshold(threshold: number): Promise<FindCategoriesWithTotalSalesAboveThresholdResponse[]>;
}