CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    product TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL
);