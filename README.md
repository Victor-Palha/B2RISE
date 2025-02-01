# 🚀 Backend challenge - B2RISE
## 🚀 Tecnologias
- **Node.js**: `>=22.13.1 LTS`
- **npm**: `>=10.9.2`
- **Typescript**: `>=5.7.3`
- **vitest**: `>=3.0.4`

## Estrutura do projeto
```bash
📂 B2RISE
│── 📂 .vscode           # Configurações do Visual Studio Code
│
│── 📂 1_typescript      # Todos os testes relacionados ao desafio 1. Testes de Typescript
│
│── 📂 2_queries         # Todos os testes relacionados ao desafio 2. Testes de SQL 
│
│── 📂 3_clean_code      # Todos os testes relacionados ao desafio 3. Testes de Clean Code
│
│── 📂 4_extra             # Extra: Sistema conceitos de Clean Code, Clean Architecture e queries relacionadas ao desafio 2
│
│── 📜 README.md         # Documentação do projeto
│
│── 📜 tsconfig.base.json # Configuração relacionado a utilização de Typescript nos desafios
│
│── 📜 docker-compose.yaml # Conteiner para upload de banco de dados postgres para queries do teste 2
```

## 🚀 Desafio 1 - Typescript
Seguindo a documentação provida para realização do desafio, foi criado uma pasta chamada `1_typescript` onde contém todos os testes relacionados ao desafio 1.
As dependências utilizadas para realização dos testes foram:
- **typescript**: `5.7.3`
- **vitest**: `3.0.4`
- **@types/node**: `22.12.0`

### Instruções
```bash
cd 1_typescript
npm install
npm run test
```

### Estrutura do projeto
```bash
📂 1_typescript
│── 📂 src
│   │── 📂 imutability                          # 1.3 Imutabilidade e Manipulação de Arrays
│   │   │── 📂 error        
│   │   │   │── 📜 not-a-number-error.ts
│   │   │── 📜 make-all-positives.ts            # Função para retornar todos os numeros de um array para positivos
│   │   │── 📜 make-all-positives.spec.ts       # Teste para a função
│   │
│   │── 📂 validation                           # 1.2 Validação e Tipagem com Union Types
│   │   │── 📂 error        
│   │   │   │── 📜 Invalid-operation-error.ts
│   │   │── 📜 calculate.ts                     # Função para retornar o valor de operações aritmetricas
│   │   │── 📜 calculate.spec.ts                # Teste para a função
│   │
│   │── 📂 values                               # 1.1 Manipulação de Tipos e Generics
│       │── 📂 error        
│       │   │── 📜 Invalid-operation-error.ts
│       │── 📜 calculate.ts                     # Função para retornar os valores de uma key de um array de objetos
│       │── 📜 calculate.spec.ts                # Teste para a função
│
│── 📜 package.json                             # Dependências do projeto
│── 📜 package-lock.json
│── 📜 tsconfig.json                            # Configuração do Typescript
```

## 📚 Desafio 2 - SQL
Seguindo a documentação provida para realização do desafio, foi criado uma pasta chamada `2_queries` onde contém todos os testes relacionados ao desafio 2.
Para o teste foi utilizado um container docker com banco de dados postgres para realização das queries juntamente com **Queries** escritas em `.sql` com o objetivo de retornar os dados solicitados.

### Instruções
```bash
docker-compose up -d
```

### Estrutura do projeto
Cada desafio foi separado em uma pasta, onde contém 3 arquivos `.sql`, seguindo a seguinte estrutura:
- **create-table.sql**: Query para criação da tabela relacionada ao desafio no banco de dados postgres
- **query-table.sql**: Query para retornar o resultado esperado do desafio
- **seed-table.sql**: Query para inserção de dados na tabela
```bash
📂 2_queries
│── 📂 2.1 
│   │── 📜 create-table.sql
│   │── 📜 query-table.sql
│   │── 📜 seed-table.sql
│── 📂 2.2
│   │── 📜 create-table.sql
│   │── 📜 query-table.sql
│   │── 📜 seed-table.sql
│── 📂 2.3
│   │── 📜 create-table.sql
│   │── 📜 query-table.sql
│   │── 📜 seed-table.sql
│── 📂 2.4
│   │── 📜 create-table.sql
│   │── 📜 query-table.sql
│   │── 📜 seed-table.sql
│── 📂 2.5
│   │── 📜 create-table.sql
│   │── 📜 query-table.sql
│   │── 📜 seed-table.sql
│── 📂 2.6
    │── 📜 create-table.sql
    │── 📜 query-table.sql
    │── 📜 seed-table.sql
```

## 🫧 Desafio 3 - Clean Code
Seguindo a documentação provida para realização do desafio, foi criado uma pasta chamada `3_clean_code` onde contém todos os testes relacionados ao desafio 3.
As dependências utilizadas para realização dos testes foram:
- **typescript**: `5.7.3`
- **vitest**: `3.0.4`
- **@types/node**: `22.12.0`

### Instruções
```bash
cd 3_clean_code
npm install
npm run test
```

### Estrutura do projeto
```bash
📂 3_clean_code
│── 📂 src
│   │── 📂 calculate-discount                   # 3.2 Cálculo de Desconto
│   │   │── 📜 calculate-discount.ts               # Função para retornar o valor do desconto
│   │   │── 📜 calculate-discount.spec.ts          # Teste para a função
│   │
│   │── 📂 double-even-numbers                  # 3.3 Dobro de Números Pares
│   │   │── 📜 double-even-numbers.ts              # Função para retornar o dobro de números pares
│   │   │── 📜 double-even-numbers.spec.ts         # Teste para a função
│   │
│   │── 📂 filter-expensive-products             # 3.1 Filtragem de Produtos com preço maior que 100
│       │── 📜 filter-expensive-products.ts        # Função para retornar os produtos com preço maior que 100
│       │── 📜 filter-expensive-products.spec.ts   # Teste para a função
│
│── 📜 package.json
│── 📜 package-lock.json
│── 📜 tsconfig.json
```