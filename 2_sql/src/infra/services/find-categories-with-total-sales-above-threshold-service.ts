import { makeFindCategoriesWithTotalSalesAboveThreshold } from "../factory/make-find-categories-with-total-sales-above-threshold";

export async function findCategoriesWithTotalSalesAboveThresholdService(){
    const service = makeFindCategoriesWithTotalSalesAboveThreshold();
    return await service.execute();
}
