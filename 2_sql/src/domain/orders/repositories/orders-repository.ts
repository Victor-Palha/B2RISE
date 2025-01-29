import { OrderEntity } from "../entities/order-entity";

export abstract class OrderRepository {
    abstract create(data: OrderEntity): Promise<void>
}