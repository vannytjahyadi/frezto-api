import { Router } from 'express';

import { AuthRouter } from './api/v1/Auth.router';
import { UserRouter } from './api/v1/User.router';

export const router = Router();

router.get('/', (req, res) => {
    res.status(200).send(
        'hello there :)'
    );
}); 

router.use('/api/v1/auth', AuthRouter);
router.use('/api/v1/user', UserRouter);