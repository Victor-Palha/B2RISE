import {afterEach, beforeAll, beforeEach, describe, expect, it} from "vitest";
import { SQLite } from "../sqlite/connection";
import { findCategoriesWithTotalSalesAboveThresholdService } from "./find-categories-with-total-sales-above-threshold-service";

describe("Find categories with total sales aboce threshold", () => {
  let DATABASE: SQLite;
  
  beforeAll(() => {
      DATABASE = new SQLite();
  })

  beforeEach(() => {
    DATABASE.exec(`
      CREATE TABLE IF NOT EXISTS categories (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT)
    `);

    DATABASE.exec(`
      CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          category_id INTEGER,
          FOREIGN KEY(category_id) REFERENCES categories(id))
    `)

    DATABASE.exec(`
      CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          quantity INTEGER,
          product_id INTEGER,
          FOREIGN KEY(product_id) REFERENCES products(id))
    `);

    DATABASE.exec(`
      INSERT INTO categories (id, name) VALUES
        (1, 'LIMPEZA'),
        (2, 'ALIMENTAÇÃO'),
        (3, 'ELETRÔNICOS'),
        (4, 'LIVROS')
    `);

    DATABASE.exec(`
        INSERT INTO products (id, name, category_id) VALUES
        (1, 'Detergente', 1),
        (2, 'Arroz', 2),
        (3, 'Feijão', 2),
        (4, 'Celular', 3),
        (5, 'Notebook', 3),
        (6, 'Tablet', 3),
        (7, 'Bíblia', 4),
        (8, 'Harry Potter', 4)
    `);

    DATABASE.exec(`
        INSERT INTO transactions (product_id, quantity) VALUES
        (1, 230),
        (2, 150),
        (3, 99),
        (4, 82),
        (5, 399),
        (6, 122),
        (7, 49),
        (8, 19)
    `);
  })

  afterEach(() => {
    DATABASE.exec(`DROP TABLE IF EXISTS transactions`);
    DATABASE.exec(`DROP TABLE IF EXISTS products`);
    DATABASE.exec(`DROP TABLE IF EXISTS categories`);
  })

  it("should return a list of categories with total sales above threshold default (100)", async () => {
      const result = await findCategoriesWithTotalSalesAboveThresholdService();
      expect(result.length).toBe(4);
      expect(result).toEqual([
          {
            category_name: 'LIMPEZA',
            product_name: 'Detergente',
            total_sold: 230
          },
          {
            category_name: 'ALIMENTAÇÃO',
            product_name: 'Arroz',
            total_sold: 150
          },
          {
            category_name: 'ELETRÔNICOS',
            product_name: 'Notebook',
            total_sold: 399
          },
          {
            category_name: 'ELETRÔNICOS',
            product_name: 'Tablet',
            total_sold: 122
          }
        ])
  });

  it("should return categories with total sales above custom threshold", async () => {
      const result = await findCategoriesWithTotalSalesAboveThresholdService(300);

      expect(result).toEqual([
          {
              category_name: 'ELETRÔNICOS',
              product_name: 'Notebook',
              total_sold: 399
          }
      ]);
  });

  it("should return an empty list if no category exceeds the threshold", async () => {
      const result = await findCategoriesWithTotalSalesAboveThresholdService(500);
      expect(result).toEqual([]);
  });
})