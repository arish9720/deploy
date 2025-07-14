
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db/index.js'; 
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use('/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Sequelize + Express + Postgres API running');
});

// Sync DB and start server
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });
