-- Criação de tabelas com relacionamento: Categories, Products e Payments
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    product_id INTEGER,
    FOREIGN KEY(product_id) REFERENCES products(id)
);

-- Seeds das tabelas
INSERT INTO categories (id, name) VALUES
    (1, 'LIMPEZA'),
    (2, 'ALIMENTAÇÃO'),
    (3, 'ELETRÔNICOS'),
    (4, 'LIVROS');
    
INSERT INTO products (id, name, category_id) VALUES
    (1, 'Detergente', 1),
    (2, 'Arroz', 2),
    (3, 'Feijão', 2),
    (4, 'Celular', 3),
    (5, 'Notebook', 3),
    (6, 'Tablet', 3),
    (7, 'Bíblia', 4),
    (8, 'Harry Potter', 4);

INSERT INTO payments (product_id, quantity) VALUES
    (1, 230),
    (2, 150),
    (3, 99),
    (4, 82),
    (5, 399),
    (6, 122),
    (7, 49),
    (8, 19);

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