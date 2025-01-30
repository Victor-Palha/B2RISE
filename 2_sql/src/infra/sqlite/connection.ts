import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define o nome do banco com fallback para "database.sqlite"
const databaseName = process.env.NODE_ENV === "test" && process.env.DB_NAME
    ? process.env.DB_NAME
    : "database.sqlite";

export class SQLite extends DatabaseSync {
    constructor(dataPath: string = databaseName) {
        super(
            path.join(__dirname, "../../../data/", dataPath),
            {
                open: true,
                readOnly: false,
                enableForeignKeyConstraints: true,
                enableDoubleQuotedStringLiterals: false,
            }
        );
    }
}

console.log(`Banco de dados utilizado: ${databaseName}`);
export const DATABASE = new SQLite();