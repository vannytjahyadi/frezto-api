import { Router } from 'express';

import { LoginRequestService } from '../../../request/authentication/Login.service';
import { RegisterRequestService } from '../../../request/authentication/Register.service';
import { ResendCodeRequestService } from '../../../request/authentication/ResendCode.service';
import { VerifyCodeRequestService } from '../../../request/authentication/VerifyCode.service';

import { LoginController } from '../../../controller/authentication/Login.controller';
import { RegisterController } from '../../../controller/authentication/Register.controller';
import { ResendCodeController } from '../../../controller/authentication/ResendCode.controller';
import { VerifyCodeController } from '../../../controller/authentication/VerifyCode.controller';

export const AuthRouter = Router();

let registerRequestService = new RegisterRequestService();
let registerController = new RegisterController();
AuthRouter.post('/register', registerRequestService.validate, registerController.register); 

let loginRequestService = new LoginRequestService();
let loginController = new LoginController();
AuthRouter.post('/login', loginRequestService.validate, loginController.login);

let resendCodeRequestService = new ResendCodeRequestService();
let resendCodeController = new ResendCodeController();
AuthRouter.post('/resend-code', resendCodeRequestService.validate, resendCodeController.resendCode);

let verifyCodeRequestService = new VerifyCodeRequestService();
let verifyCodeController = new VerifyCodeController();
AuthRouter.post('/verify-code', verifyCodeRequestService.validate, verifyCodeController.verifyCode);