import * as underscore from 'underscore';

export class HelperService {
    
    constructor() {}

    static capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static generateOtpCode() {
        return Math.floor(1000 + Math.random() * 900000);
    }

}