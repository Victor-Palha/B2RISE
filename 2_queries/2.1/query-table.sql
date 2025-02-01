-- Active: 1733771757357@@127.0.0.1@5432@b2rise
-- SELECT * FROM sales;

-- Escreva uma query para calcular a receita total (quantity * price) para cada produto, ordenando por receita total em ordem decrescente.
SELECT 
    product, 
    SUM(quantity * price) AS total_revenue
FROM sales
GROUP BY product
ORDER BY total_revenue DESC;