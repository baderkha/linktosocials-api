import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Link } from "./Link";
import { UserProfile } from "./UserProfile";

@Entity('accounts')
@Unique("email",["email"])
export class Account {

    @PrimaryGeneratedColumn()
    id : String;

    @Column({name : 'email'})
    email : String;

    @Column()
    password : String;

    @OneToMany(_=>Link,link=>link.account)
    links : Link[];

    @OneToOne(_=>UserProfile,profile => profile.account)
    profile : UserProfile;

}