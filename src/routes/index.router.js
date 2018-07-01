"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = require("./api/v1/auth.router");
const user_router_1 = require("./api/v1/user.router");
exports.router = express_1.Router();
exports.router.use('/api/v1/auth', auth_router_1.authRouter);
exports.router.use('/api/v1/user', user_router_1.userRouter);
