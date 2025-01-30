import { makeAdjustSalariesBelowthreshold } from "../factory/make-adjust-salaries-below-threshold";

export async function AdjustSalariesBelowthresholdService(threshold?: number) {
    const service = makeAdjustSalariesBelowthreshold();
    return await service.execute(threshold);
}