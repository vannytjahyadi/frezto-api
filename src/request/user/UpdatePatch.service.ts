import { ErrorService } from "@service/Error.service";

export class UpdatePatchRequestService {
    
    constructor() {}

    async validate(req:any, res:any, next:any) {

        req.check("country_code")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        req.check("phone_number")
            .exists().withMessage("required")
            .notEmpty().withMessage("empty");

        req.check("password")
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