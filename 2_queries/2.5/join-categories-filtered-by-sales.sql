-- Consulta o total de vendas por categoria
SELECT 
    c.name AS category_name,
    p.name AS product_name,
    SUM(pay.quantity) AS total_sold
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN payments pay ON p.id = pay.product_id
GROUP BY c.id, c.name, p.id, p.name
HAVING SUM(pay.quantity) > 100;