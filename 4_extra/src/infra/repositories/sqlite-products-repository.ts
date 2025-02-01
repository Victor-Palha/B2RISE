import { ProductEntity } from "../../domain/categories/entities/product-entity";
import { ProductRepository } from "../../domain/categories/repositories/product-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository for handling product-related operations in an SQLite database.
 * Extends the SQLiteBaseRepository and implements ProductRepository.
 */
export class SQLiteProductsRepository extends SQLiteBaseRepository implements ProductRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
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