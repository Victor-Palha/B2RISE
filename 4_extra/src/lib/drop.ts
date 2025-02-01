import { DATABASE, SQLite } from "../infra/sqlite/connection";

export function drop(db: SQLite = DATABASE) {
    const database = db;
    console.log('Dropping all tables...');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=');
    database.exec(`DROP TABLE IF EXISTS sales`);
    database.exec(`DROP TABLE IF EXISTS users`);
    database.exec(`DROP TABLE IF EXISTS employees`);
    database.exec(`DROP TABLE IF EXISTS orders`);
    database.exec(`DROP TABLE IF EXISTS customers`);
    database.exec(`DROP TABLE IF EXISTS payments`);
    database.exec(`DROP TABLE IF EXISTS products`);
    database.exec(`DROP TABLE IF EXISTS categories`);
    database.exec(`DROP TABLE IF EXISTS transactions`);
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=');
}

drop();