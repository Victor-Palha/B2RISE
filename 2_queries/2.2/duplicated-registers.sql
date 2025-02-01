-- Criação da tabela users
CREATE TABLE IF NOT EXISTS users (
    id      SERIAL  PRIMARY KEY,
    name    TEXT    NOT NULL,
    email   TEXT    NOT NULL
);

-- Seed de usuários
INSERT INTO users (name, email) VALUES
    ('John', 'john@test.com'),
    ('Doe', 'doe@test.com'),
    ('Jane', 'jane@test.com'),
    ('Jim', 'jim@test.com'),
    ('James', 'james@test.com'),
    ('Johnathan', 'john@test.com'),
    ('Jimmy', 'jim@test.com'),
    ('Jenny', 'jim@test.com');

-- Consulta para verificação de email duplicados
SELECT email, COUNT(*) AS count FROM users GROUP BY email HAVING COUNT(*) > 1;