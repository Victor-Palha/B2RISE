CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    product_id INTEGER,
    FOREIGN KEY(product_id) REFERENCES products(id)
);