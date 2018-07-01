import { RequestHandler } from 'express'

export const tokenGuard: (() => RequestHandler) = (() => (req, res, next) => {
        console.log(req);
        console.log('check token');
      next();
  })