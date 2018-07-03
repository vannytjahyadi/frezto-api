import { ErrorService } from "@service/Error.service";

import { getManager } from "typeorm";
import { User } from "@entity/User.entity";

export class RegisterRequestService {
    
    constructor() {}

    async register(req:any, res:any, next:any) {

         // get a post repository to perform operations with post
         const userRepository = getManager().getRepository(User);

         let test = await userRepository.find();
        console.log(test);

        req.check("email")
            .exists().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid");


        req.checkBody("lastName", "Password is required").exists();

        var errors = req.validationErrors();
        if (errors) {
            ErrorService.sendErrorValidation(res, errors);
        } else {
            next();
        }
    }
}