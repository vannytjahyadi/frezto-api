import { createConnection } from "typeorm";

import "reflect-metadata";

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as expressValidator  from 'express-validator';
var multipart = require('connect-multiparty');

import { router } from './routes/index.router';

createConnection().then(async connection => {

    const app = express();
    const port = process.env.port || 8080;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(multipart());
    app.use(expressValidator());

    app.use('/', router);

    app.listen(port, () => {
        console.log(`Frezto API is listening on port ${port}`);
    });
    
}).catch(error => console.log(error));