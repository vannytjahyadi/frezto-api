import { ErrorHandleService } from "../../service/error.service";

export class RegisterRequestService {
    
    constructor() {}

    register(req:any, res:any, next:any) {

        req.checkBody("firstName", "Email is required").exists();
        req.checkBody("firstName", "Enter a valid email address").isEmail();

        req.checkBody("lastName", "Password is required").exists();

        var errors = req.validationErrors();
        if (errors) {
            ErrorHandleService.sendErrorValidation(res, errors);
        } else {
            next();
        }
    }
}