-- Criação de tabelas com relacionamento: Customers e Orders
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    country TEXT
);
        
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    total REAL,
    customer_id INTEGER,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

-- Seeds das tabelas
INSERT INTO customers (id, name, country) VALUES
    (1, 'John', 'USA'),
    (2, 'Doe', 'ITA'),
    (3, 'Jane', 'BRA'),
    (4, 'Jim', 'USA'),
    (5, 'James', 'USA'),
    (6, 'Johnathan', 'BRA'),
    (7, 'Jimmy', 'CHI'),
    (8, 'Jenny', 'JAP');

INSERT INTO orders (total, customer_id) VALUES
    (29.50, 1),
    (31.99, 2),
    (42.10, 3),
    (30.00, 4),
    (38.33, 5),
    (104.99, 6),
    (15.00, 7),
    (299.99, 1),
    (42.42, 2),
    (57.90, 3);

-- Consulta o total de pedidos feitos pelo cliente
SELECT c.id, c.name, ROUND(SUM(o.total)::NUMERIC, 2) AS total 
    FROM customers c 
    JOIN orders o ON c.id = o.customer_id 
    GROUP BY c.id, c.name 
    ORDER BY total DESC;