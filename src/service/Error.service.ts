import * as underscore from 'underscore';
import configErrorCode from '../config/ErrorCode';

import { TranslateService } from '../service/Translate.service';

export class ErrorService {
    
    constructor() {}

    
    static sendErrorValidation(res:any, err:any) {
        let errData = [];

        for (let i = 0; i < err.length; i++) {
            let tempIndex = underscore.findIndex(errData, {field: err[i]['param']});
            let msg = TranslateService.translateError(err[i]['msg'], err[i]['param']);
            if (tempIndex > -1) {
                errData[tempIndex]['errors'].push(msg);
            } else {
                errData.push({
                    field: err[i]['param'],
                    errors: [msg]
                });
            }
        }
        this.sendErrorResponse(res, 10001, errData);
    }

     static sendErrorResponse(res: any, errorCode:number = 10000, data:Object = null, statusCode:number = 400): void {

        let Error = {
			result: 'Fail',
			code: errorCode,
            desc: configErrorCode[errorCode]
        };

        if (data) {
            Error['data'] = data;
        }
        
        res.status(statusCode).send(Error);
	}
}