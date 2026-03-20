import express from 'express';
import {
  getAllExpenses,
  createNewExpense,
  deleteExpense,
  updateExpense,
  patchExpense,
} from '../controllers/expenseController.js';

const expenseRouter = express.Router();

expenseRouter.route('/').get(getAllExpenses).post(createNewExpense);

expenseRouter
  .route('/:id')
  .delete(deleteExpense)
  .patch(patchExpense)
  .put(updateExpense);

export { expenseRouter };
