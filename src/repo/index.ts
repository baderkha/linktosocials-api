
import { getCustomRepository } from "typeorm";
import { AccountRepository } from "./AccountRepository";
import { LinkRepository } from "./LinkRepository";
import { UserProfileRepo } from "./UserProfileRepo";

export default {
    userProfileRepo : getCustomRepository(UserProfileRepo),
    accountRepo : getCustomRepository(AccountRepository),
    linkRepo : getCustomRepository(LinkRepository)
}