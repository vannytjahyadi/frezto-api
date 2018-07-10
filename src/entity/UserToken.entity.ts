import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { User } from "./User.entity";

import * as moment from 'moment';

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

    @BeforeInsert()
    beforeInsert() {
        this.created_at = moment().toDate();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.expired_at = moment().add(30, 'minutes').toDate();
        this.updated_at = moment().toDate();
    }
}
