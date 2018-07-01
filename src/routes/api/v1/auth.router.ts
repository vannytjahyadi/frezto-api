import { Router } from 'express';

import { AuthenticationController } from '../../../controller/authentication.controller';

import { RegisterRequestService } from '../../../request/authentication/register.service';

export const authRouter = Router();

let authentication = new AuthenticationController();

let registerRequestService = new RegisterRequestService();

authRouter.post('/register', registerRequestService.register, authentication.register); 