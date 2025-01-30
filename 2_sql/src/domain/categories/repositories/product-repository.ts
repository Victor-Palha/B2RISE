import { ProductEntity } from '../entities/product-entity';
export abstract class ProductRepository {
    abstract create(product: ProductEntity): Promise<void>;
}