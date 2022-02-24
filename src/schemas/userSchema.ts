import Joi from 'joi';
import type { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import type { IUserJoi } from '../interfaces';

// Inspirado em: ['https://dev.to/rubengmurray/creating-interfaces-from-joi-schemas-in-typescript-35ab', 'https://gist.github.com/ThomasHambach/6103774085fbe258a0377af35ed3d489']

const userSchema: ObjectSchema<IUserJoi> = Joi.object({
  Level: Joi.number().min(1).required()
    .messages({ 'number.min': 'Level must be greater than 0' }),
  Password: Joi.string().min(8).required()
    .messages({ 'string.min': 'Password must be longer than 7 characters' }),
  Username: Joi.string().min(3).required()
    .messages({ 'string.min': 'Username must be longer than 2 characters' }),
  Classe: Joi.string().min(3).required()
    .messages({ 'string.min': 'Classe must be longer than 2 characters' }),
});

export default (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  // Gabiarra pq o Joi buga com o tipo number como string e tbm pq o Lint chora quando usa o typeof de thow new Error
  if (level && typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }

  const newUser: IUserJoi = { 
    Username: username, Classe: classe, Level: level, Password: password };
  const { error } = userSchema.validate(newUser);

  if (error) throw error;

  next();
};
