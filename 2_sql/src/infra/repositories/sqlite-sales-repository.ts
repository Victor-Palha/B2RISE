import { SalesEntity } from "../../domain/sales/entities/sales-entity";
import { CalculateTotalRevenueByProductResponse, SalesRepository } from "../../domain/sales/repositories/sales-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

export class SQLiteSalesRepository extends SQLiteBaseRepository implements SalesRepository {
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

    public async create(salesEntity: SalesEntity){
        const salesData = salesEntity.toDTO;
        const insert = this.database.prepare(
            `INSERT INTO sales (product, quantity, price) VALUES (?, ?, ?)`
        );
        insert.run(salesData.product, salesData.quantity, salesData.price);
    }

    public async calculateTotalRevenueByProduct() {
        const query = this.database.prepare(
            `SELECT product, SUM(quantity * price) as total FROM sales GROUP BY product`
        )
        const result = query.all();
        return this.mapperFromDBToPresenter<CalculateTotalRevenueByProductResponse>(result);
    }
}