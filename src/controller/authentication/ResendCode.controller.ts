import { getRepository } from "typeorm";

import { User } from "@entity/User.entity";
import { UserToken } from "@entity/UserToken.entity";

import { ErrorService } from "@service/Error.service";
import { HelperService } from "@service/Helper.service";

export class ResendCodeController {
    
    constructor() {}

    async resendCode(req:any, res:any) {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email: req.body.email});

        if (user) {
            if (user['is_verified']) {
                ErrorService.sendErrorResponse(res, 50001);
                return false;
            } else {

                //check last request time if its more than 120 seconds from last request then allow resend code
                
                const userTokenRepository = getRepository(UserToken);

                const userToken = await user.userToken;
                userToken.otp_code = HelperService.generateOtpCode();
                await userTokenRepository.save(userToken);
                User.sendOtp(user, userToken['otp_code']);
            }
        }

        res.status(200).json({
            result: "Success"
        });
    }
}