import { Router } from 'express';

import { AuthenticationController } from '@controller/Authentication.controller';

import { RegisterRequestService } from '@request/authentication/Register.service';

export const authRouter = Router();

let authentication = new AuthenticationController();

let registerRequestService = new RegisterRequestService();

authRouter.post('/register', registerRequestService.register, authentication.register); 