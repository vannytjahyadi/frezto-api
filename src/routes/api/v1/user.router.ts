import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.status(200).json('get user list');
});

userRouter.post('/', (req, res) => {
    res.status(200).json('create user');
});

userRouter.get('/:id', (req, res) => {
    res.status(200).json('get user detail with id ' +  req.params.id);
});

userRouter.put('/', (req, res) => {
    res.status(200).json('update user');
});

userRouter.delete('/', (req, res) => {
    res.status(200).json('delete user');
});