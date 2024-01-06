// src/app.ts
import express, { Request, Response } from 'express';
import './db'; // Importa la configuración de la base de datos
import abilityRoutes from './routes/abilityRoutes';
import pokemonRoutes from './routes/pokemonRoutes';
import userRoutes from './routes/userRoutes';
import { authenticateUser } from './middleware/authMiddleware';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', abilityRoutes);
app.use('/api', pokemonRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
