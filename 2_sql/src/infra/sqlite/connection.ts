import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let DATABASE_FILE = "database.sqlite";

if(process.env.NODE_ENV === 'test') {
    DATABASE_FILE = "test.sqlite";
}

export class SQLite extends DatabaseSync {
    constructor() {
        super(
            path.join(__dirname, "../../../data/", DATABASE_FILE),
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