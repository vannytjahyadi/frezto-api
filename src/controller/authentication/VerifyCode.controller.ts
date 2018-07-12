import { getRepository } from "typeorm";

import { User } from "../../entity/User.entity";

import { ErrorService } from "../../service/Error.service";

import * as moment from 'moment';

export class VerifyCodeController {
    
    constructor() {}

    async verifyCode(req:any, res:any) {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email: req.body.email});

        if (!user) {
            ErrorService.sendErrorResponse(res, 50002);
            return false;
        }

        const userToken = await user.userToken;
        if (moment() > moment(userToken.expired_at)) {
            ErrorService.sendErrorResponse(res, 50006);
            return false;
        }

        if (req.body.otp_code == userToken['otp_code']) {

            user.is_verified = true;
            await userRepository.save(user);
            
            res.status(200).json({
                result: "Success"
            });
        } else {
            ErrorService.sendErrorResponse(res, 50005);
            return false;
        }
    }
}