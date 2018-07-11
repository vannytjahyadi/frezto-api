import config from '@config/Config';
import * as jwt from 'jsonwebtoken';

export class TokenService {

    constructor() {}

    static createToken(params) {
        const accessToken = jwt.sign({
            id: params.id,
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email,
        }, config.token.webKey, {expiresIn: config.token.expiration_for_access_token});
        const refreshToken = jwt.sign({id: params.id}, config.token.webKey, {expiresIn: config.token.expiration_for_refresh_token});
    
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
        }
    }

}