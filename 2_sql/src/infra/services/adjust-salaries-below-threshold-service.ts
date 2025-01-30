import { makeAdjustSalariesBelowthreshold } from "../factory/make-adjust-salaries-below-threshold";

export async function AdjustSalariesBelowthresholdService(){
    const service = makeAdjustSalariesBelowthreshold();
    return await service.execute();
}