import config from '@config/Config';
import * as jwt from 'jsonwebtoken';

import { ErrorService } from '@service/Error.service';

export class AuthorizationMiddleware {

    constructor() {}

    checkToken(req:any, res:any, next:any) {
        let accessToken = req.get('authorization');

        if (accessToken == undefined) {
            ErrorService.sendErrorResponse(res, 20000, null, 403);
        }

        accessToken = accessToken.replace('Bearer ','').trim();
        jwt.verify(accessToken, config.token.webKey, (err:any, data:any) => {
            if(err) {
                ErrorService.sendErrorResponse(res, 20001, null, 403);
            } else {
                next();
            }
        });
    }

    
}