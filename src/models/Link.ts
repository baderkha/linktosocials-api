import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";

export enum LinkType {
    SOCIAL = 'social',
    GENERIC = 'generic'
}

export enum SocialMediaType {
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram',
    TWITTER = 'twitter',
    LINKEDIN = 'linkedin',
    NONE = 'none'
}

@Entity('links')
export class Link {
    @PrimaryGeneratedColumn()
    id : string;

    @Column({
        type : 'enum',
        enum : LinkType,
        default : LinkType.GENERIC
    })
    linkType : LinkType;

    @Column({
        type :'enum',
        enum : SocialMediaType,
        default : SocialMediaType.NONE,
    })
    socialMediaType : SocialMediaType;
    
    @Column()
    linkUrl : string;

    @Column()
    linkImage : string;

    @Column()
    linkDescriptoin : string;

    @ManyToOne(_ => Account,accountData => accountData.links )
    account : Account;

}