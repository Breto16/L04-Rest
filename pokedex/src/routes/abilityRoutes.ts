// src/routes/abilityRoutes.ts
import express from 'express';
import { getAllAbilities, createAbility } from '../controllers/abilityController';

const router = express.Router();

router.get('/abilities', getAllAbilities);
router.post('/abilities', createAbility);

export default router;
