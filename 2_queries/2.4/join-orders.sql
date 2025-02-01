SELECT c.id, c.name, ROUND(SUM(o.total)::NUMERIC, 2) AS total 
FROM customers c 
JOIN orders o ON c.id = o.customer_id 
GROUP BY c.id, c.name 
ORDER BY total DESC;