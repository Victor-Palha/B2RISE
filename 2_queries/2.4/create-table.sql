CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    total NUMERIC(10, 2) NOT NULL CHECK (total >= 0),
    customer_id INTEGER,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);