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
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entity/User.entity");
class AuthenticationController {
    constructor() { }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // get a post repository to perform operations with post
            const userRepository = typeorm_1.getManager().getRepository(User_entity_1.User);
            // create a real post object from post json object sent over http
            const newUser = userRepository.create(req.body);
            // save received post
            yield userRepository.save(newUser);
            res.status(200).json({
                result: 'Success',
            });
        });
    }
}
exports.AuthenticationController = AuthenticationController;
