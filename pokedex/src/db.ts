// src/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://mongoAdmin:admin1008@cluster0.rgrqpo4.mongodb.net/Pokedex'; // Reemplaza 'your-database-name' con el nombre real de tu base de datos

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
