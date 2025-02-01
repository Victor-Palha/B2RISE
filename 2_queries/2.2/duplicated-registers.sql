SELECT email, COUNT(email) AS 
counter FROM users 
GROUP BY email HAVING COUNT(email) > 1;