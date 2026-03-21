import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/db.js';
import { expenseRouter } from './routes/expenseRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRouter);

const initApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB Connected!');

    await sequelize.sync(); // Ye table bana dega agar nahi hai toh
    console.log('✅ Tables Synced!');

    if (process.env.NODE_ENV !== 'test') {
      app.listen(process.env.PORT, () =>
        console.log(`🚀 Server is running on port ${process.env.PORT}`)
      );
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

initApp();
