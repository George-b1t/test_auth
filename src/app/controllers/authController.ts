import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class Authenticator {
  async loginAuthenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { username, password } = req.body;

    const user = await repository.findOne({ where: { username } });

    if (!user) {
      return res.sendStatus(401);
    };

    // const isValidPassword = await bcrypt.compare(password, user.password);

    // if (!isValidPassword) {
    //   return res.sendStatus(401);
    // };

    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });

    return res.json({ 
      token 
    });
  };
};

export default new Authenticator();
