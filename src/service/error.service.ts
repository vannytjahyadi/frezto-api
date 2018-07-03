import * as underscore from 'underscore';

export class ErrorService {
    
    constructor() {}
    
    static sendErrorValidation(res:any, err:any) {
        let errDesc = [];

        for (let i = 0; i < err.length; i++) {
            let tempIndex = underscore.findIndex(errDesc, {field: err[i]['param']});
            if (tempIndex > -1) {
                errDesc[tempIndex]['errors'].push(err[i]['msg']);
            } else {
                errDesc.push({
                    field: err[i]['param'],
                    errors: [err[i]['msg']]
                });
            }
        }
        this.sendErrorResponse(res, 400, errDesc);
    }

     static sendErrorResponse(res: any, errorCode: number, errorDescription: any): void {

        let Error = {
			result: 'Fail',
			code: errorCode,
			desc: errorDescription,
        };
        
        res.status(errorCode).send(Error);
	}
}