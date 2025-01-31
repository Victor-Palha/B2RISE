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
│── 📂 2_sql             # Extra: Sistema utilizando todas as queries relacionadas ao desafio 2. Testes de SQL
│
│── 📂 3_clean_code      # Todos os testes relacionados ao desafio 3. Testes de Clean Code
│
│── 📜 README.md         # Documentação do projeto
│
│── 📜 tsconfig.base.json # Configuração relacionado a utilização de Typescript nos desafios
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