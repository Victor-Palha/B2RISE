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