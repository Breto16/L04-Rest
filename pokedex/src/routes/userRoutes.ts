// src/routes/userRoutes.ts
import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:username', updateUser);
router.delete('/users/:username', deleteUser);

export default router;
