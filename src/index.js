"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
var multipart = require('connect-multiparty');
require('module-alias/register');
const index_router_1 = require("./routes/index.router");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    const app = express();
    const port = process.env.port || 8080;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(multipart());
    app.use(expressValidator());
    app.use('/', index_router_1.router);
    app.listen(port, () => {
        console.log(`Frezto API is listening on port ${port}`);
    });
})).catch(error => console.log(error));
