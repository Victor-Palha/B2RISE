import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class SQLite extends DatabaseSync {
    constructor() {
        super(
            path.join(__dirname, "../../../data/database.sqlite"),
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