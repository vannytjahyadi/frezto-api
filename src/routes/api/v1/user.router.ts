import { Router } from 'express';

import { AuthorizationMiddleware } from '@middleware/Authorization.middleware';

export const UserRouter = Router();

let authorizationMiddleware = new AuthorizationMiddleware();
UserRouter.use(authorizationMiddleware.checkToken);

UserRouter.get('/', (req:any, res:any) => {
    res.status(200).send('its working');
});