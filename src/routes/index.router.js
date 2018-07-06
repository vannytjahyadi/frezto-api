"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Auth_router_1 = require("./api/v1/Auth.router");
var User_router_1 = require("./api/v1/User.router");
exports.router = express_1.Router();
exports.router.post('/', function (req, res) {
    res.status(200).send('hello there :)');
});
exports.router.use('/api/v1/auth', Auth_router_1.authRouter);
exports.router.use('/api/v1/user', User_router_1.userRouter);
