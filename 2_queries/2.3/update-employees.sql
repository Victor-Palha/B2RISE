-- -- Verifica todos os empregados que tem salario menor que 5000
-- SELECT * FROM employees WHERE salary < 5000;
-- Atualizar todos os salários menores que 5000 em 10% arrredondando para 2 casas decimais
UPDATE employees 
SET salary = ROUND((salary * 1.10)::NUMERIC, 2) 
WHERE salary < 5000;

-- TRUNCATE TABLE employees;