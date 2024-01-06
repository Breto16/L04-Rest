// src/controllers/abilityController.ts
import { Request, Response } from 'express';
import Ability, { IAbility } from '../models/ability';

export const getAllAbilities = async (req: Request, res: Response): Promise<void> => {
  try {
    const abilities: IAbility[] = await Ability.find();
    res.json(abilities);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createAbility = async (req: Request, res: Response): Promise<void> => {
  try {
    // Tu lógica para crear una habilidad aquí
  } catch (error) {
    res.status(500).send(error.message);
  }
};
