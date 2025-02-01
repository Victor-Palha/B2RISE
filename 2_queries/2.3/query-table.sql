-- SELECT * FROM employees WHERE salary < 5000;
-- Escreva uma query para aumentar o salário em 10% para os empregados que ganham menos de 5000, mas não altere os outros.
UPDATE employees 
SET salary = ROUND((salary * 1.10)::NUMERIC, 2) 
WHERE salary < 5000;

-- TRUNCATE TABLE employees;