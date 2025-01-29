import { makeIdentifyDuplicateEmails } from "../factory/make-identify-duplicate-emails";

export async function identifyDuplicateEmailsService(){
    const service = makeIdentifyDuplicateEmails();
    return await service.execute();
}