"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Error_service_1 = require("@service/Error.service");
const typeorm_1 = require("typeorm");
const User_entity_1 = require("@entity/User.entity");
class RegisterRequestService {
    constructor() { }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // get a post repository to perform operations with post
            const userRepository = typeorm_1.getManager().getRepository(User_entity_1.User);
            let test = yield userRepository.find();
            console.log(test);
            req.check("email")
                .exists().withMessage("Email is required")
                .isEmail().withMessage("Email is invalid");
            req.checkBody("lastName", "Password is required").exists();
            var errors = req.validationErrors();
            if (errors) {
                Error_service_1.ErrorService.sendErrorValidation(res, errors);
            }
            else {
                next();
            }
        });
    }
}
exports.RegisterRequestService = RegisterRequestService;
