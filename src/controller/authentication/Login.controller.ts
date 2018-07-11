import { getRepository } from "typeorm";

import { User } from "@entity/User.entity";

import { TokenService } from "@service/Token.service";
import { ErrorService } from "@service/Error.service";

export class LoginController {
    
    constructor() {}

    async login(req:any, res:any) {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email: req.body.email});

        if (req.body.type == 'default') {
            await LoginController.loginByDefault(req, res, user);
        } else {
            await LoginController.loginBySocial(req, res, user);
        }
    }

    static async loginByDefault(req, res, user) {
        if (user) {
            if (user['is_verified']) {
                if(user['password'] === req.body.password.trim()) {
                    let token = TokenService.createToken(user);
                    let result = {
                        result: 'Success',
                        data: token
                    };
                    res.status(200).json(result);

                } else {
                    ErrorService.sendErrorResponse(res, 50003);
                }
                
            } else {
                const userToken = await user.userToken;
                User.sendOtp(user, userToken['otp_code']);
                res.status(200).json({
                    result: "Success"
                });
            }
           
        } else {
            ErrorService.sendErrorResponse(res, 50002);
        }
    }

    static async loginBySocial(req, res, user) {
        if (user) { 
            if (user['is_verified']) {

                let token = TokenService.createToken(user);
                let result = {
                    result: 'Success',
                    data: token
                };
                res.status(200).json(result);
            } else {
                const userToken = await user.userToken;
                User.sendOtp(user, userToken['otp_code']);
                res.status(200).json({
                    result: "Success"
                });
            }
            
        } else {
            const newUser = await User.createUser(req.body);
            User.sendOtp(newUser, newUser['userToken']['otp_code']);
            res.status(200).json({
                result: "Success"
            });
        }
    }
}