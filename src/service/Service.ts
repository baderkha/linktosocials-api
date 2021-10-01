import { Account } from "src/models/Account";
import { Link } from "src/models/Link";
import { UserProfile } from "src/models/UserProfile";
import { IService } from "./IService";

export class Service implements IService {
    
    getAllLinksByAccountId(accountId: string): Link[] {
        throw new Error("Method not implemented.");
    }
    getUserProfileByAccountId(accountId: string): UserProfile {
        throw new Error("Method not implemented.");
    }
    createLink(link: Link): void {
        throw new Error("Method not implemented.");
    }
    updateLink(link: Link): void {
        throw new Error("Method not implemented.");
    }
    deleteLinkById(linkId: string): void {
        throw new Error("Method not implemented.");
    }
    createUserProfile(userProfile: UserProfile): void {
        throw new Error("Method not implemented.");
    }
    updateUserProfile(userProfile: UserProfile): void {
        throw new Error("Method not implemented.");
    }
    createAccount(account: Account): void {
        throw new Error("Method not implemented.");
    }

}