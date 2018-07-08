import { Router } from 'express';

import { LoginRequestService } from '@request/authentication/Login.service';
import { RegisterRequestService } from '@request/authentication/Register.service';

import { RegisterController } from '@controller/authentication/Register.controller';

export const AuthRouter = Router();

let registerRequestService = new RegisterRequestService();
let registerController = new RegisterController();
AuthRouter.post('/register', registerRequestService.validate, registerController.register); 


let loginRequestService = new LoginRequestService();
AuthRouter.post('/login', loginRequestService.validate, registerController.register); 