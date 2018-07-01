"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.userRouter = express_1.Router();
exports.userRouter.get('/', (req, res) => {
    res.status(200).json('get user list');
});
exports.userRouter.post('/', (req, res) => {
    res.status(200).json('create user');
});
exports.userRouter.get('/:id', (req, res) => {
    res.status(200).json('get user detail with id ' + req.params.id);
});
exports.userRouter.put('/', (req, res) => {
    res.status(200).json('update user');
});
exports.userRouter.delete('/', (req, res) => {
    res.status(200).json('delete user');
});
