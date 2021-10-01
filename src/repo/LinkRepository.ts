import { Link } from "../models/Link";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Link)
export class LinkRepository extends Repository<Link> {
}