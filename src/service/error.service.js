"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var underscore = require("underscore");
var ErrorCode_1 = require("@config/ErrorCode");
var Translate_service_1 = require("@service/Translate.service");
var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    ErrorService.sendErrorValidation = function (res, err) {
        var errData = [];
        for (var i = 0; i < err.length; i++) {
            var tempIndex = underscore.findIndex(errData, { field: err[i]['param'] });
            var msg = Translate_service_1.TranslateService.translateError(err[i]['msg'], err[i]['param']);
            if (tempIndex > -1) {
                errData[tempIndex]['errors'].push(msg);
            }
            else {
                errData.push({
                    field: err[i]['param'],
                    errors: [msg]
                });
            }
        }
        this.sendErrorResponse(res, 10001, errData);
    };
    ErrorService.sendErrorResponse = function (res, errorCode, data, statusCode) {
        if (errorCode === void 0) { errorCode = 10000; }
        if (data === void 0) { data = null; }
        if (statusCode === void 0) { statusCode = 400; }
        var Error = {
            result: 'Fail',
            code: errorCode,
            desc: ErrorCode_1.default[errorCode]
        };
        if (data) {
            Error['data'] = data;
        }
        console.log(Error);
        res.status(statusCode).send(Error);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;
