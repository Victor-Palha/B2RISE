-- Crie uma view chamada monthly_summary que mostre o account_id, o mês (extraído de transaction_date), 
-- e o valor total das transações (soma de amount) agrupado por account_id e mês.
DROP VIEW IF EXISTS monthly_summary;

CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    TO_CHAR(transaction_date, 'YYYY-MM') AS month,
    SUM(amount) AS total_amount
FROM transactions
GROUP BY account_id, month;

-- SELECT * FROM monthly_summary;

-- Em seguida, escreva uma query para listar os resumos mensais apenas para contas que tiveram transações 
-- superiores a 10.000 em pelo menos um mês.
SELECT * FROM monthly_summary WHERE total_amount > 10000;