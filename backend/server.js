import express from 'express';
import cors from 'cors';
import './config/env.js';
import { sequelize } from './config/db.js';
import { expenseRouter } from './routes/expenseRoutes.js';

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

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

// don't need to create server for testing
// because supertest will automatically create it for testing
/* istanbul ignore next */ // this will ignore below check from the coverage calculation
if (process.env.NODE_ENV !== 'test') {
  initApp();
}

export default app;
