import { Account } from "../models/Account";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
    
}   