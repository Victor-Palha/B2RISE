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
-- SELECT * FROM monthly_summary;

-- Consulta para retornar os resumos mensais com total maior que 10_000
SELECT * FROM monthly_summary WHERE total_amount > 10000;