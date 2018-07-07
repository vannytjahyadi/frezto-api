import { ErrorService } from "@service/Error.service";

import { getRepository } from "typeorm";
import { User } from "@entity/User.entity";

export class RegisterRequestService {
    
    constructor() {}

    async validate(req:any, res:any, next:any) {

        req.check("email")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty")
            .isEmail().withMessage("invalid").normalizeEmail();

        req.check("password")
            .exists().withMessage("required");

        req.check("first_name")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        req.check("last_name")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        req.check("country_code")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        req.check("phone_number")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        
        var errors = req.validationErrors();
        if (errors) {
            ErrorService.sendErrorValidation(res, errors);
            return false;
        }

        const userRepository = getRepository(User);
        let user = await userRepository.find({email: req.body.email});

        if (user.length) {
            ErrorService.sendErrorResponse(res, 50001);
            return false;
        } else {
            next();
        }
    }
}