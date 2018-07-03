import { Router } from 'express';

import { authRouter } from './api/v1/Auth.router';
import { userRouter } from './api/v1/User.router';

export const router = Router();

router.post('/', (req, res) => {
    res.status(200).send(
        'hello there :)'
    );
}); 

router.use('/api/v1/auth', authRouter);
router.use('/api/v1/user', userRouter);