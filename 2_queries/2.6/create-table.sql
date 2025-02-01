CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    account_id INTEGER,
    transaction_date DATE,
    amount REAL
);