import { IdentifyDuplicateEmailsResponse, UserRepository } from "../repositories/user-repository";

export class IdentifyDuplicateEmailsUseCase {
    constructor(
        private readonly userRepository: UserRepository
    ){}

    public async execute(): Promise<IdentifyDuplicateEmailsResponse[]> {
        return this.userRepository.identifyDuplicateEmails();
    }
}