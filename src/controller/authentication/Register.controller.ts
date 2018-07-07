import { getManager } from "typeorm";

import { User } from "@entity/User.entity";
import { UserToken } from "@entity/UserToken.entity";

import { HelperService } from "@service/Helper.service";

export class RegisterController {
    
    constructor() {}

    async register(req:any, res:any, next:any) {

        const userRepository = getManager().getRepository(User);
        const newUser = userRepository.create(req.body);

        await userRepository.save(newUser);

        const userTokenRepository = getManager().getRepository(UserToken);

        const userToken = new UserToken();
        userToken.user_id = newUser["id"];
        userToken.otp_code = HelperService.generateOtpCode();
        userToken.expired_at = new Date();
        await userTokenRepository.save(userToken);

        User.sendOtp(newUser, userToken['otp_code']);

        res.status(200).json({
            result: "Success"
        });
    }
}