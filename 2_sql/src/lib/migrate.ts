import { DATABASE, SQLite } from "../infra/sqlite/connection";

function migrate() {
    const database = DATABASE;
    console.log('Migrating database...');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=');
    console.log('Creating sales table...');
    up_sales(database);
    console.log('Creating users table...');
    up_users(database);
    console.log('Creating employees table...');
    up_employees(database);
    console.log('Creating customers table...');
    up_customers(database);
    console.log('Creating orders table...');
    up_order(database);
}

function up_sales(db: SQLite) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS sales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product TEXT,
            quantity INTEGER,
            price REAL)
        `);
}

function up_users(db: SQLite) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT)
        `);
}

function up_employees(db: SQLite) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS employees (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            salary REAL)
        `);
}

function up_customers(db: SQLite) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            country TEXT)
        `);
}

function up_order(db: SQLite) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            total REAL,
            customer_id INTEGER,
            FOREIGN KEY(customer_id) REFERENCES customers(id))
        `);
}
migrate();