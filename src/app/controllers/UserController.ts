import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async showAllUsers(req: Request, res: Response) {
    const repository = getRepository(User);

    const users = await repository.find();

    return res.status(200).json(users);
  };

  async show(req: Request, res: Response) {
    return res.json({ userId: req.userId });
  };

  async create(req: Request, res: Response) {
    const repository = getRepository(User);
    const { username, password } = req.body;

    const userExists = await repository.findOne({ where: { username } });

    if (userExists) {
      return res.sendStatus(409);
    };

    const user = repository.create({ 
        username, 
        password
      });

    await repository.save(user);

    return res.json(user);
  };

  async delete(req: Request, res: Response) {
    const repository = getRepository(User);
    const { id } = req.body;

    const userExists = await repository.findOne({ where: { id } });

    if (!userExists) {
      return res.sendStatus(401);
    }

    await repository.delete(userExists);

    return res.json(userExists);
  };
};

export default new UserController();
