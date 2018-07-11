import { getRepository } from "typeorm";
import { User } from "@entity/User.entity";

import { ErrorService } from "@service/Error.service";

export class LoginRequestService {
    
    constructor() {}

    async validate(req:any, res:any, next:any) {
        req.check("type")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty")
            .isIn(['default', 'facebook', 'googleplus', 'linkedin']).withMessage("Type must contain selected type");

        req.check("email")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty")
            .isEmail().withMessage("invalid").normalizeEmail();

        if (req.body.type != undefined) {
            if (req.body.type == 'default') {
                req.check("password")
                    .exists().withMessage("required");
            } else {
                req.check("first_name")
                    .exists().withMessage("required")
                    .notEmpty().withMessage("empty");
    
                req.check("last_name")
                    .exists().withMessage("required")
                    .notEmpty().withMessage("empty");
            }
        }

        var errors = req.validationErrors();
        if (errors) {
            ErrorService.sendErrorValidation(res, errors);
            return false;
        }
        
        next();
    }
}