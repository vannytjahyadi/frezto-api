import { Router } from 'express';

import { authRouter } from './api/v1/auth.router';
import { userRouter } from './api/v1/user.router';

export const router = Router();

router.use('/api/v1/auth', authRouter);
router.use('/api/v1/user', userRouter);