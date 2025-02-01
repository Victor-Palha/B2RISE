CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    product VARCHAR(255) NOT NULL,
    quantity SMALLINT NOT NULL CHECK (quantity > 0),
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0)
);