"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_controller_1 = require("../../../controller/authentication.controller");
const register_service_1 = require("../../../request/authentication/register.service");
exports.authRouter = express_1.Router();
let authentication = new authentication_controller_1.AuthenticationController();
let registerRequestService = new register_service_1.RegisterRequestService();
exports.authRouter.post('/register', registerRequestService.register, authentication.register);
