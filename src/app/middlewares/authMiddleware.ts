import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return next();
  };

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'secret_key');

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch { 
    return res.sendStatus(401);
  }
}
