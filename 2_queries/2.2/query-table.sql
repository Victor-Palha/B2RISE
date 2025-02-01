-- Escreva uma query para identificar os emails que estão duplicados, juntamente com o número de ocorrências.
SELECT email, COUNT(email) AS
counter FROM users 
GROUP BY email HAVING COUNT(email) > 1;