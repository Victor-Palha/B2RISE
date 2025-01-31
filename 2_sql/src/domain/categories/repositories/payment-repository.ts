import { PaymentEntity } from "../entities/payment-entity";

export abstract class PaymentRepository {
    abstract create(transcation: PaymentEntity): Promise<void>;
}