"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Authentication_controller_1 = require("@controller/Authentication.controller");
var Register_service_1 = require("@request/authentication/Register.service");
exports.authRouter = express_1.Router();
var authentication = new Authentication_controller_1.AuthenticationController();
var registerRequestService = new Register_service_1.RegisterRequestService();
exports.authRouter.post('/register', registerRequestService.register, authentication.register);
