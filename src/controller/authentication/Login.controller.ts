import { getRepository } from "typeorm";

import { User } from "@entity/User.entity";

import { ErrorService } from "@service/Error.service";

export class LoginController {
    
    constructor() {}

    async login(req:any, res:any) {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email: req.body.email});

        if (req.body.type == 'default') {
            await this.loginByDefault(req, res, user);
        } else {
            await this.loginBySocial(req, res, user);
        }

        res.status(200).json({
            result: "Success"
        });
    }

    async loginByDefault(req, res, user) {
        if (user) {
            if (user['is_verified']) {
                if(user['password'] === req.body.password) {
                    res.status(200).json({
                        result: "Success",
                        accessToken: "123456"
                    });
                } else {
                    ErrorService.sendErrorResponse(res, 50003);
                }
                
            } else {
                const userToken = await user.userToken;
                User.sendOtp(user, userToken['otp_code']);
            }
           
        } else {
            ErrorService.sendErrorResponse(res, 50002);
        }
    }

    async loginBySocial(req, res, user) {
        if (user) { 
            if (user['is_verified']) {
                res.status(200).json({
                    result: "Success",
                    accessToken: "123456"
                });
            } else {
                const userToken = await user.userToken;
                User.sendOtp(user, userToken['otp_code']);
            }
            
        } else {
            const newUser = await User.createUser(req.body);
            User.sendOtp(newUser, newUser['userToken']['otp_code']);
        }
    }
}