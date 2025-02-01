-- Criação da tabela employees
CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    salary REAL NOT NULL
);

-- Seed employees
INSERT INTO employees (name, salary) VALUES
    ('John', 1250), -- 10% de 1250 é 125
    ('Doe', 1500),
    ('Jane', 5000),
    ('Jim', 5500),
    ('James', 6000),
    ('Johnathan', 3500),
    ('Jimmy', 4000),
    ('Jenny', 4500);

-- Verifica todos os empregados que tem salario menor que 5000
SELECT * FROM employees WHERE salary < 5000;

-- Atualizar todos os salários menores que 5000 em 10%
UPDATE employees SET salary = ROUND((salary * 1.10)::NUMERIC, 2) WHERE salary < 5000;

-- Limpar tabela
TRUNCATE TABLE employees;