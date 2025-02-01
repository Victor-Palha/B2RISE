-- Criação da tabela de transações
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    account_id INTEGER,
    transaction_date DATE,
    amount REAL
);

-- seed de dados
INSERT INTO transactions (account_id, transaction_date, amount) VALUES
    (1, '2025-01-05'::DATE, 5000),
    (1, '2025-01-15'::DATE, 6000),
    (1, '2025-02-15'::DATE, 10000),

    (2, '2025-01-10'::DATE, 3000),
    (2, '2025-01-20'::DATE, 4000),
    (2, '2025-01-25'::DATE, 5000),

    (3, '2025-02-05'::DATE, 2000),
    (3, '2025-02-15'::DATE, 1500),

    (4, '2025-03-10'::DATE, 12000),

    (5, '2025-01-05'::DATE, 8000),
    (5, '2025-01-25'::DATE, 3000);

-- Criação da view de resumo mensal chamada monthly_summary
DROP VIEW IF EXISTS monthly_summary;

CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    TO_CHAR(transaction_date, 'YYYY-MM') AS month,
    SUM(amount) AS total_amount
FROM transactions
GROUP BY account_id, month;


-- Consulta para retornar os resumos mensais
SELECT * FROM monthly_summary;

-- Consulta para retornar os resumos mensais com total maior que 10000
SELECT * FROM monthly_summary WHERE total_amount > 10000;