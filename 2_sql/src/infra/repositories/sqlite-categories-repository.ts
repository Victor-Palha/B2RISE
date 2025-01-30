import { CategoryEntity } from "../../domain/categories/entities/category-entity";
import { CategoryRepository, FindCategoriesWithTotalSalesAboveThresholdResponse } from "../../domain/categories/repositories/category-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

export class SQLiteCategoriesRepository extends SQLiteBaseRepository implements CategoryRepository {
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

    public async create(categoryEntity: CategoryEntity){
        const category = categoryEntity.toDto;
        const insert = this.database.prepare(
            `INSERT INTO categories (name) VALUES (?)`
        );
        insert.run(category.name);
    }

    public async findCategoriesWithTotalSalesAboveThreshold(threshold: number){
        const query = this.database.prepare(`
            SELECT 
                c.name AS category_name,
                p.name AS product_name,
                SUM(t.quantity) AS total_sold
            FROM products p
            JOIN categories c ON p.category_id = c.id
            JOIN transactions t ON p.id = t.product_id
            GROUP BY c.id, c.name, p.id, p.name
            HAVING SUM(t.quantity) > ?
        `);
    
        const result = query.all(threshold);
        return this.mapperFromDBToPresenter<FindCategoriesWithTotalSalesAboveThresholdResponse>(result);
    }
}