import config from '../config/Config';

import { HelperService } from '../service/Helper.service';

export class TranslateService {

    constructor() {}

    static translateError(msg, param) {
        let lang = require('../resources/lang/' + config.locale);
        let attribute = HelperService.capitalizeFirstLetter(param.replace('_', ' '));
        let errorMsg ='';

        if (msg.includes('custom:')) {
            msg = msg.replace('custom:', '');
            return msg;
        } else if (msg.includes('min:')) {
            let number = msg.replace('min:', '');
            errorMsg = lang['error']['min'];
            return errorMsg.replace('<<attribute>>', attribute).replace('<<number>>', number);

        } else if (msg.includes('max:')) {
            let number = msg.replace('max:', '');
            errorMsg = lang['error']['max'];
            return errorMsg.replace('<<attribute>>', attribute).replace('<<number>>', number);
        } else {
            errorMsg = lang['error'][msg];
            return errorMsg ? errorMsg.replace('<<attribute>>', attribute) : msg;
        }
    }

    
}