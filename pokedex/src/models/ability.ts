// src/models/ability.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAbility extends Document {
  name: string;
  description: string;
}

const AbilitySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IAbility>('Ability', AbilitySchema);
