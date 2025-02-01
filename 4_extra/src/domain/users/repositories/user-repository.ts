import { UserEntity } from "../entity/user-entity";

export type IdentifyDuplicateEmailsResponse = {
    email: string;
    count: number;
};

export abstract class UserRepository {
    /**
     * Creates a new user in the database.
     * @param {UserEntity} data - The user entity containing the user details to be inserted into the database.
     * @returns {Promise<void>} A promise that resolves when the user is successfully created.
    */
    abstract create(data: UserEntity): Promise<void>;
    /**
     * Identifies duplicate emails in the users table.
     * @returns {Promise<IdentifyDuplicateEmailsResponse[]>} A promise that resolves with an array of duplicate email responses, 
     * containing the email addresses and their occurrence count.
    */
    abstract identifyDuplicateEmails(): Promise<IdentifyDuplicateEmailsResponse[]>;
}