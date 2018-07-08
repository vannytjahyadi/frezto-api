import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class UserToken {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    otp_code: number;

    @Column()
    expired_at: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    //Relations
    @OneToOne(type => User, user => user.userToken)
    @JoinColumn({ name: 'user_id' })
    user: Promise<User>;
}
