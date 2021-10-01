import { UserProfile } from "../models/UserProfile"
import { EntityRepository, Repository } from "typeorm"


@EntityRepository(UserProfile)
export class UserProfileRepo extends Repository<UserProfile> {
}