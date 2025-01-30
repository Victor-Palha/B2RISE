import { CategoryRepository } from "../repositories/category-repository";

export class FindCategoriesWithTotalSalesAboveThresholdUseCase {
    constructor(
        private categoryRepository: CategoryRepository
    ){}

    public async execute(threshold: number = 100){
        return this.categoryRepository.findCategoriesWithTotalSalesAboveThreshold(threshold);
    }
}