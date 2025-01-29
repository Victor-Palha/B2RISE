import { DATABASE } from "../infra/sqlite/connection";

function drop(){
    const database = DATABASE;
    console.log('Dropping all tables...');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=');
    database.exec(`DROP TABLE IF EXISTS sales`);
    database.exec(`DROP TABLE IF EXISTS users`);
    database.exec(`DROP TABLE IF EXISTS employees`);
    database.exec(`DROP TABLE IF EXISTS orders`);
    database.exec(`DROP TABLE IF EXISTS customers`);
}

drop();