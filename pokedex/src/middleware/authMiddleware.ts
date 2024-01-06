 srcmiddlewareauthMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateUser = (req Request, res Response, next NextFunction) void = {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');  Reemplaza 'your-secret-key' con tu clave secreta
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message 'Invalid token' });
  }
};
