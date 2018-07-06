"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");
var EjsService = /** @class */ (function () {
    function EjsService() {
    }
    EjsService.renderHtml = function (userType, file, params) {
        var html = '';
        var fileLocation = '../view/email/' + userType + '/' + file + '.html';
        var filePath = path.join(__dirname, fileLocation);
        var content = fs.readFileSync(filePath, 'utf8');
        html = ejs.render(content, params);
        return html;
    };
    return EjsService;
}());
exports.EjsService = EjsService;
