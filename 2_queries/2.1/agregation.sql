-- Active: 1733771757357@@127.0.0.1@5432@b2rise
-- Consulta para visualização de todos os produtos
-- SELECT * FROM sales;

-- Consulta de agregação: Calculando a receita total por produto, ordenando em ordem decrescente
SELECT 
    product, 
    SUM(quantity * price) AS total_revenue
FROM sales
GROUP BY product
ORDER BY total_revenue DESC;