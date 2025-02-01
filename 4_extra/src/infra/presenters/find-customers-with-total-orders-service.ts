import { makeFindCustomersWithTotalOrders } from "../factory/make-find-customers-with-total-orders";

export async function findCustomersWithTotalOrdersService() {
    const service = makeFindCustomersWithTotalOrders();
    return await service.execute();
}