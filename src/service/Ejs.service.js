"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
class EjsService {
    constructor() {
    }
    static renderHtml(userType, file, params) {
        let html = '';
        let fileLocation = '../view/email/' + userType + '/' + file + '.html';
        let filePath = path.join(__dirname, fileLocation);
        let content = fs.readFileSync(filePath, 'utf8');
        html = ejs.render(content, params);
        return html;
    }
}
exports.EjsService = EjsService;
