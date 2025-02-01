-- Escreva uma query para listar o nome dos clientes e o total de compras realizadas, ordenando pelo total de
-- compras em ordem decrescente. Inclua apenas os clientes que realizaram compras.
SELECT c.id, c.name, ROUND(SUM(o.total)::NUMERIC, 2) AS total 
FROM customers c 
JOIN orders o ON c.id = o.customer_id 
GROUP BY c.id, c.name 
ORDER BY total DESC;