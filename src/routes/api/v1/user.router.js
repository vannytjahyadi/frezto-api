"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
exports.userRouter = express_1.Router();
exports.userRouter.get('/', function (req, res) {
    res.status(200).json('get user list');
});
exports.userRouter.post('/', function (req, res) {
    res.status(200).json('create user');
});
exports.userRouter.get('/:id', function (req, res) {
    res.status(200).json('get user detail with id ' + req.params.id);
});
exports.userRouter.put('/', function (req, res) {
    res.status(200).json('update user');
});
exports.userRouter.delete('/', function (req, res) {
    res.status(200).json('delete user');
});
