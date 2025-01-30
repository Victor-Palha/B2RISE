import { ProductEntity } from "../../domain/categories/entities/product-entity";
import { ProductRepository } from "../../domain/categories/repositories/product-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

export class SQLiteProductsRepository extends SQLiteBaseRepository implements ProductRepository {
    constructor(
        private readonly database: SQLite
    ){
        super();
    }
     
    async create(productEntity: ProductEntity) {
        const product = productEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO products (name, category_id) VALUES (?, ?)`
        );
        insert.run(product.name, product.categoryId);
    }
}