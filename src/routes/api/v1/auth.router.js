"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Authentication_controller_1 = require("@controller/Authentication.controller");
const Register_service_1 = require("@request/authentication/Register.service");
exports.authRouter = express_1.Router();
let authentication = new Authentication_controller_1.AuthenticationController();
let registerRequestService = new Register_service_1.RegisterRequestService();
exports.authRouter.post('/register', registerRequestService.register, authentication.register);
