import { ErrorService } from "@service/Error.service";

export class VerifyCodeRequestService {
    
    constructor() {}

    async validate(req:any, res:any, next:any) {

        req.check("email")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty")
            .isEmail().withMessage("invalid").normalizeEmail();

        req.check("otp_code")
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