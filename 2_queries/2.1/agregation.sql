-- Active: 1733771757357@@127.0.0.1@5432@b2rise
-- Criação da tabela sales
CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    product TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL
);

-- Inserção de dados na tabela sales
INSERT INTO sales (product, quantity, price) VALUES
    ('Prego', 10, 1.5),
    ('Martelo', 5, 10.0),
    ('Serra', 2, 30.0),
    ('Parafuso', 100, 0.5),
    ('Furadeira', 1, 150.0),
    ('Trena', 3, 20.0),
    ('Alicate', 5, 15.0),
    ('Chave de fenda', 10, 5.0);

-- Consulta para visualização de todos os produtos
SELECT * FROM sales;

-- Consulta de agregação: Calculando a receita total por produto, ordenando em ordem decrescente
SELECT 
    product, 
    SUM(quantity * price) AS total_revenue
FROM sales
GROUP BY product
ORDER BY total_revenue DESC;