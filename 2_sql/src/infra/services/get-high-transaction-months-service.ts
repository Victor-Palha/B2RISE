import { makeGetHighTransactionMonths } from "../factory/make-get-high-transaction-months";

export async function getHighTransactionMonthsService(){
    const service = makeGetHighTransactionMonths();
    return await service.execute();
}
