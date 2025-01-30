import { makeFindCategoriesWithTotalSalesAboveThreshold } from "../factory/make-find-categories-with-total-sales-above-threshold";

export async function findCategoriesWithTotalSalesAboveThresholdService(threshold?: number) {
    const service = makeFindCategoriesWithTotalSalesAboveThreshold();
    return await service.execute(threshold);
}
