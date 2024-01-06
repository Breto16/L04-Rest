// src/controllers/userController.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/user';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Error Desconocido');
    }
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user: IUser = new User({ username, password });
    await user.save();
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Error Desconocido');
    }
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username } = req.params;
    const { password } = req.body;
    const user: IUser | null = await User.findOneAndUpdate({ username }, { password }, { new: true });
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Error Desconocido');
    }
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username } = req.params;
    await User.findOneAndDelete({ username });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Error Desconocido');
    }
  }
};
