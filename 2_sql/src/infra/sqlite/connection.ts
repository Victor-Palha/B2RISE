import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const databaseName = process.env.NODE_ENV === "test" && process.env.DB_NAME
    ? process.env.DB_NAME
    : "database.sqlite";

export class SQLite extends DatabaseSync {
    constructor(db: string = databaseName) {
        super(
            path.join(__dirname, "../../../data/", db),
            {
                open: true,
                readOnly: false,
                enableForeignKeyConstraints: true,
                enableDoubleQuotedStringLiterals: false,
            }
        );
    }
}

export const DATABASE = new SQLite();