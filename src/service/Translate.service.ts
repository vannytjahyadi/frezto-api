import config from '@config/Config';

import { HelperService } from '@service/Helper.service';

export class TranslateService {

    constructor() {}

    static translateError(msg, param) {
        let lang = require('../resources/lang/' + config.locale);
        let attribute = HelperService.capitalizeFirstLetter(param.replace('_', ' '));

        let errorMsg = lang['error'][msg];

        return errorMsg ? errorMsg.replace('<<attribute>>', attribute) : msg;
    }

    
}