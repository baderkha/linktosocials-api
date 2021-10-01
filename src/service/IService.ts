import { Account } from "../models/Account";
import { Link } from "../models/Link";
import { UserProfile } from "../models/UserProfile";

export interface IService {

    // gets
    getAllLinksByAccountId(accountId : string) : Link[];
    getUserProfileByAccountId(accountId : string) : UserProfile;

    //          crud
    
    
    // link
    createLink(link : Link) : void;
    updateLink(link : Link) : void;
    deleteLinkById(linkId : string) : void;
    
    
    // user profile
    createUserProfile(userProfile : UserProfile) : void;
    updateUserProfile(userProfile : UserProfile) : void;


    // account
    createAccount(account : Account) : void;
    
    

}