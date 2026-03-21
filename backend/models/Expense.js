import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Expense = sequelize.define('Expense', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Miscellaneous',
  },
});
