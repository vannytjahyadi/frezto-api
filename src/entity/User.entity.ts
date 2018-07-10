import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BeforeInsert, BeforeUpdate, getRepository } from "typeorm";
import { UserToken } from "./UserToken.entity";

import { HelperService } from "../service/Helper.service";
import { MailService } from "../service/Mail.service";

import * as moment from 'moment';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    is_verified: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    is_deleted: boolean;

    //Relations
    @OneToOne(type => UserToken, userToken => userToken.user )
    userToken: Promise<UserToken>;

    @BeforeInsert()
    beforeInsert() {
        this.email = this.email.trim().toLowerCase();
        this.first_name = this.first_name.trim().toLowerCase();
        this.last_name = this.last_name.trim().toLowerCase();
        this.created_at = moment().toDate();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updated_at = moment().toDate();
    }

    static async createUser(params) {
        const userRepository = getRepository(User);
        const userTokenRepository = getRepository(UserToken);

        //create user
        const newUser = userRepository.create(params);
        await userRepository.save(newUser);

        //create user token
        const userToken = new UserToken();
        userToken.user_id = newUser["id"];
        userToken.otp_code = HelperService.generateOtpCode();
        userToken.expired_at = new Date();
        await userTokenRepository.save(userToken);

        newUser['userToken'] = userToken; 
        return newUser;
    }

    static sendOtp(user, otpCode) {
        MailService.sendEmail("user", user['email'], 'OTP CODE', 'verification', {
            first_name: user['first_name'],
            last_name: user['last_name'],
            otp_code: otpCode
        });
    }
}
