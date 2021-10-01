import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Account } from "./Account";

@Entity('user_profiles')
export class UserProfile {

    @PrimaryGeneratedColumn()
    id : String;

    @Column("longtext")
    bio : String;

    @Column()
    profilePictureUrl : string;
    
    @OneToOne(type => Account,accountData =>accountData.profile )
    account : Account

}
