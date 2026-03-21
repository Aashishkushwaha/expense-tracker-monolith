import express from 'express';
import {
  getAllExpenses,
  createNewExpense,
  deleteExpense,
  updateExpense,
  patchExpense,
  getExpenseById,
} from '../controllers/expenseController.js';

const expenseRouter = express.Router();

expenseRouter.route('/').get(getAllExpenses).post(createNewExpense);

expenseRouter
  .route('/:id')
  .get(getExpenseById)
  .delete(deleteExpense)
  .patch(patchExpense)
  .put(updateExpense);

export { expenseRouter };
