"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGuard = (function () { return function (req, res, next) {
    console.log(req);
    console.log('check token');
    next();
}; });
