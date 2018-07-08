import { getRepository } from "typeorm";

import { User } from "@entity/User.entity";

import { ErrorService } from "@service/Error.service";

export class LoginController {
    
    constructor() {}

    async login(req:any, res:any) {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email: req.body.email});

        if (req.body.type == 'default') {
            if (user && user['is_verified']) {
                //return access token
            } else {
                //belom terdaftar
            }
        } else {
            if (user) {
                //kalo udah verified
                // return access token
                // kalo belom verified
                //send otp
            } else {
                // daftarin
                //send otp
            }
        }

        if (user) {
            const userToken = await user.userToken;

            if (user['is_verified']) {
                ErrorService.sendErrorResponse(res, 50001);
                return false;
            } else {
                User.sendOtp(user, userToken['otp_code']);
            }
        } else {
           const newUser = await User.createUser(req.body);
           User.sendOtp(newUser, newUser['userToken']['otp_code']);
        }

        res.status(200).json({
            result: "Success"
        });
    }
}