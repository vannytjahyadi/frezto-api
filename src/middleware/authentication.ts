import { RequestHandler } from 'express'

export const checkUserToken: (() => RequestHandler) = (() => (req, res, next) => {
        console.log(req);
        console.log('check token');
      next();
  })