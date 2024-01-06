// src/models/pokemon.ts
import mongoose, { Schema, Document, Types } from 'mongoose';
import { IAbility } from './ability';

export interface IPokemon extends Document {
  name: string;
  abilities: Types.ObjectId[] | IAbility[];
  primaryType: string;
  secondaryType?: string;
  description: string;
}

const PokemonSchema: Schema = new Schema({
  name: { type: String, required: true },
  abilities: [{ type: Schema.Types.ObjectId, ref: 'Ability' }],
  primaryType: { type: String, required: true },
  secondaryType: { type: String },
  description: { type: String, required: true },
});

export default mongoose.model<IPokemon>('Pokemon', PokemonSchema);
