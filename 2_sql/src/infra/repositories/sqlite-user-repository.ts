import { UserEntity } from "../../domain/users/entity/user-entity";
import { IdentifyDuplicateEmailsResponse, UserRepository } from "../../domain/users/repositories/user-repository";
import { SQLite } from "../sqlite/connection";

export class SQLiteUserRepository implements UserRepository {
    constructor(
        private readonly database: SQLite
    ){}

    public async create(data: UserEntity){
        const user = data.toDTO;
        const insert = this.database.prepare(
            `INSERT INTO users (name, email) VALUES (?, ?)`
        );
        insert.run(user.name, user.email);
    }

    public async identifyDuplicateEmails(){
        const query = this.database.prepare(
            `SELECT email, COUNT(*) as count FROM users GROUP BY email HAVING count > 1`
        )
        const result = query.all();
        const fixedResult: IdentifyDuplicateEmailsResponse[] = [];
        for (const user of result) {
            fixedResult.push(Object.create(Object.prototype, Object.getOwnPropertyDescriptors(user)));
        }
        return fixedResult;
    }

}