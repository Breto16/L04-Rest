// src/routes/pokemonRoutes.ts
import express from 'express';
import { getAllPokemon, getPokemonById, createPokemon, updatePokemon, deletePokemon } from '../controllers/pokemonController';

const router = express.Router();

router.get('/pokemon', getAllPokemon);
router.get('/pokemon/:pokedexNumber', getPokemonById);
router.post('/pokemon', createPokemon);
router.put('/pokemon/:pokedexNumber', updatePokemon);
router.delete('/pokemon/:pokedexNumber', deletePokemon);

export default router;
