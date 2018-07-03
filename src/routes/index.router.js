"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_router_1 = require("./api/v1/Auth.router");
const User_router_1 = require("./api/v1/User.router");
exports.router = express_1.Router();
exports.router.post('/', (req, res) => {
    res.status(200).send('hello there :)');
});
exports.router.use('/api/v1/auth', Auth_router_1.authRouter);
exports.router.use('/api/v1/user', User_router_1.userRouter);
