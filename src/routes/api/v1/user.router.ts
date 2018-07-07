import { Router } from 'express';

export const UserRouter = Router();

UserRouter.post('/resend-otp-code', (req, res) => {
    res.status(200).json('check username');
});

UserRouter.get('/check-username', (req, res) => {
    console.log(req.query);
    res.status(200).json('check username');
});

UserRouter.get('/', (req, res) => {
    res.status(200).json('get user list');
});

UserRouter.post('/', (req, res) => {
    res.status(200).json('create user');
});

UserRouter.get('/:id', (req, res) => {
    res.status(200).json('get user detail with id ' +  req.params.id);
});

UserRouter.put('/', (req, res) => {
    res.status(200).json('update user');
});

UserRouter.delete('/', (req, res) => {
    res.status(200).json('delete user');
});