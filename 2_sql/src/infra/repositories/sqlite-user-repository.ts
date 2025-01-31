import { UserEntity } from "../../domain/users/entity/user-entity";
import { IdentifyDuplicateEmailsResponse, UserRepository } from "../../domain/users/repositories/user-repository";
import { SQLite } from "../sqlite/connection";
import { SQLiteBaseRepository } from "./sqlite-base-repository";

/**
 * Repository class for interacting with the SQLite database for user-related operations.
 * Extends the SQLiteBaseRepository and implements the UserRepository interface.
 */
export class SQLiteUserRepository extends SQLiteBaseRepository implements UserRepository {
    /**
     * Constructs the repository with an SQLite database instance.
     * @param {SQLite} database - The SQLite database connection.
    */
    constructor(
        private readonly database: SQLite
    ){
        super();
    }

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
        return this.mapperFromDBToPresenter<IdentifyDuplicateEmailsResponse>(result);
    }
}