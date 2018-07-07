import { Router } from 'express';

import { RegisterRequestService } from '@request/authentication/Register.service';

import { RegisterController } from '@controller/authentication/Register.controller';

export const AuthRouter = Router();

let registerRequestService = new RegisterRequestService();
let registerController = new RegisterController();

AuthRouter.post('/register', registerRequestService.validate, registerController.register); 