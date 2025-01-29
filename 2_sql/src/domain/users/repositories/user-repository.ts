import { UserEntity } from "../entity/user-entity";

export type IdentifyDuplicateEmailsResponse = {
    email: string;
    count: number;
};

export abstract class UserRepository {
    abstract create(data: UserEntity): Promise<void>;
    abstract identifyDuplicateEmails(): Promise<IdentifyDuplicateEmailsResponse[]>;
}