import { ErrorService } from "../../service/Error.service";

export class ResendCodeRequestService {
    
    constructor() {}

    async validate(req:any, res:any, next:any) {

        req.check("email")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty")
            .isEmail().withMessage("invalid").normalizeEmail();
        
        var errors = req.validationErrors();
        if (errors) {
            ErrorService.sendErrorValidation(res, errors);
            return false;
        }
        next();
    }
}