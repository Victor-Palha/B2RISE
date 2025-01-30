import { existsSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function deleteTestDatabase(dbName: string){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const DATABASE_PATH = path.join(__dirname, "../../data/", dbName);
    if(!existsSync(DATABASE_PATH)){
        return;
    }
    console.log('Deleting test database...');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=');
    unlinkSync(DATABASE_PATH);
    console.log('Test database deleted');
}