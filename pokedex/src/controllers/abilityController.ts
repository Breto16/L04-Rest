// src/controllers/abilityController.ts
import { Request, Response } from 'express';
import Ability, { IAbility } from '../models/ability';

export const getAllAbilities = async (req: Request, res: Response): Promise<void> => {
  try {
    const abilities: IAbility[] = await Ability.find();
    res.json(abilities);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Error Desconocido');
    }
  }
};

export const createAbility = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({ message: 'Name and description are required for creating an ability' });
      return;
    }

    const existingAbility = await Ability.findOne({ name });
    if (existingAbility) {
      res.status(409).json({ message: 'An ability with the same name already exists' });
      return;
    }

    const newAbility: IAbility = new Ability({ name, description });
    await newAbility.save();

    res.json(newAbility);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
};
