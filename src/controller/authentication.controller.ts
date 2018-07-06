import { getManager } from "typeorm";

import { User } from "@entity/User.entity";
import { UserToken } from "@entity/UserToken.entity";

import { MailService } from "@service/Mail.service";
import { HelperService } from "@service/Helper.service";

export class AuthenticationController {
    
    constructor() {}

    async register(req:any, res:any, next:any) {

        // get a post repository to perform operations with post
        const userRepository = getManager().getRepository(User);

        // create a real post object from post json object sent over http
        const newUser = userRepository.create(req.body);

        // save received post
        await userRepository.save(newUser);

        const userTokenRepository = getManager().getRepository(UserToken);

        const userToken = new UserToken();
        userToken.user_id = newUser["id"];
        userToken.otp_code = HelperService.generateOtpCode();
        userToken.expired_at = new Date();
        await userTokenRepository.save(userToken);

        MailService.sendEmail("user", newUser["email"], 'OTP CODE', 'example', {otp_code: userToken.otp_code});

        res.status(200).json({
            result: "Success",
            data: []
        });
    }
}