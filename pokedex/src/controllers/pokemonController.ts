// src/controllers/pokemonController.ts
import { Request, Response } from 'express';
import Pokemon, { IPokemon } from '../models/pokemon';
import Ability from '../models/ability';

export const getAllPokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const pokemon: IPokemon[] = await Pokemon.find();
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getPokemonById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pokedexNumber } = req.params;
    const pokemon: IPokemon | null = await Pokemon.findOne({ pokedexNumber });
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createPokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, abilities, primaryType, secondaryType, description } = req.body;

    // Verifica que todas las habilidades existan antes de crear el Pokémon
    const existingAbilities = await Ability.find({ _id: { $in: abilities } });
    if (existingAbilities.length !== abilities.length) {
      res.status(400).send({ message: 'Una o mas habilidades no existen' });
    }

    const pokemon: IPokemon = new Pokemon({ name, abilities, primaryType, secondaryType, description });
    await pokemon.save();
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updatePokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pokedexNumber } = req.params;
    const { abilities } = req.body;

    // Verifica que todas las habilidades existan antes de actualizar el Pokémon
    const existingAbilities = await Ability.find({ _id: { $in: abilities } });
    if (existingAbilities.length !== abilities.length) {
      res.status(400).send({ message: 'Una o mas habilidades no existen' });
    }

    const updatedPokemon: IPokemon | null = await Pokemon.findOneAndUpdate(
      { pokedexNumber },
      req.body,
      { new: true }
    );
    res.json(updatedPokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deletePokemon = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pokedexNumber } = req.params;
    await Pokemon.findOneAndDelete({ pokedexNumber });
    res.json({ message: 'Pokemon Borrado!' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
