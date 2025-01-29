import { makeCalculateTotalRevenue } from "../factory/make-calculate-total-revenue";

export async function calculateTotalRevenueService(){
    const service = makeCalculateTotalRevenue();
    return await service.execute()
}