"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const underscore = require("underscore");
class ErrorService {
    constructor() { }
    static sendErrorValidation(res, err) {
        let errDesc = [];
        for (let i = 0; i < err.length; i++) {
            let tempIndex = underscore.findIndex(errDesc, { field: err[i]['param'] });
            if (tempIndex > -1) {
                errDesc[tempIndex]['errors'].push(err[i]['msg']);
            }
            else {
                errDesc.push({
                    field: err[i]['param'],
                    errors: [err[i]['msg']]
                });
            }
        }
        this.sendErrorResponse(res, 400, errDesc);
    }
    static sendErrorResponse(res, errorCode, errorDescription) {
        let Error = {
            result: 'Fail',
            code: errorCode,
            desc: errorDescription,
        };
        res.status(errorCode).send(Error);
    }
}
exports.ErrorService = ErrorService;
