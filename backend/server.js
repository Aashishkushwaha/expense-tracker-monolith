import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {sequelize} from './config/db.js'
import { Expense } from './models/Expense.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const initApp = async() => {
    try {
        await sequelize.authenticate();
        console.log('✅ DB Connected!');

        await sequelize.sync(); // Ye table bana dega agar nahi hai toh
        console.log('✅ Tables Synced!');

        app.listen(process.env.PORT, () => console.log(`🚀 Server is running on port ${process.env.PORT}`));
    } catch (err) {
        console.error('❌ Error:', err.message);
    }
}

initApp();