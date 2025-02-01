import { IdentifyDuplicateEmailsUseCase } from "../../domain/users/user-cases/identify-duplicate-emails-use-case";
import { SQLiteUserRepository } from "../repositories/sqlite-user-repository";
import { DATABASE } from "../sqlite/connection";

export function makeIdentifyDuplicateEmails() {
    const respository = new SQLiteUserRepository(DATABASE);
    const service = new IdentifyDuplicateEmailsUseCase(respository);
    return service;
}