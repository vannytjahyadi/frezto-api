import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BeforeInsert } from "typeorm";
import { UserToken } from "./UserToken.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    is_deleted: boolean;

    //Relations
    @OneToOne(type => UserToken, userToken => userToken.user )
    userToken: UserToken;


    @BeforeInsert()
    beforeInsert() {
        this.created_at = new Date();
    }
}
