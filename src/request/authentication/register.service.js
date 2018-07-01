"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_service_1 = require("../../service/error.service");
class RegisterRequestService {
    constructor() { }
    register(req, res, next) {
        req.checkBody("firstName", "Email is required").exists();
        req.checkBody("firstName", "Enter a valid email address").isEmail();
        req.checkBody("lastName", "Password is required").exists();
        var errors = req.validationErrors();
        if (errors) {
            error_service_1.ErrorHandleService.sendErrorValidation(res, errors);
        }
        else {
            next();
        }
    }
}
exports.RegisterRequestService = RegisterRequestService;
