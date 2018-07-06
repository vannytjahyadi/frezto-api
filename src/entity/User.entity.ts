import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, BeforeInsert } from "typeorm";
import { UserToken } from "./UserToken.entity";

import { MailService } from "@service/Mail.service";
import { HelperService } from "@service/Helper.service";

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
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

    static sendOtp(user, otpCode) {
        MailService.sendEmail("user", user['email'], 'OTP CODE', 'example', {
            first_name: user['first_name'],
            last_name: user['last_name'],
            otp_code: otpCode
        });
    }
}
