-- Escreva uma query para listar o nome da categoria, o nome do produto e a quantidade total vendida de cada
-- produto. Filtre apenas as categorias que possuem mais de 100 unidades vendidas no total.
SELECT 
    c.name AS category_name,
    p.name AS product_name,
    SUM(pay.quantity) AS total_sold
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN payments pay ON p.id = pay.product_id
GROUP BY c.id, c.name, p.id, p.name
HAVING SUM(pay.quantity) > 100;