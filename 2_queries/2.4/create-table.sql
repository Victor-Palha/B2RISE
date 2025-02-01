CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    country TEXT
);
        
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    total REAL,
    customer_id INTEGER,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
