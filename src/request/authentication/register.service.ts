import { ErrorService } from "@service/Error.service";

export class RegisterRequestService {
    
    constructor() {}

    async validate(req:any, res:any, next:any) {

        req.check("email")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty")
            .isEmail().withMessage("invalid").normalizeEmail();

        req.check("first_name")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        req.check("last_name")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        
        var errors = req.validationErrors();
        if (errors) {
            ErrorService.sendErrorValidation(res, errors);
            return false;
        }
        next();
    }
}