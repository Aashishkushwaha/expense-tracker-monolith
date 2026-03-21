import { Expense } from '../models/Expense.js';
import { errorHandler } from '../utils/errors.js';

// Get All Expenses
export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    return res.status(200).json(expenses);
  } catch (error) {
    return errorHandler(
      res,
      error,
      'Some error occurred while fetching expenses.'
    );
  }
};

// Get Expense by id
export const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByPk(id);

    if (!expense)
      return errorHandler(
        res,
        null,
        `Get failed: Expense with id: ${id} not found.`,
        400
      );

    return res.status(200).json(expense);
  } catch (error) {
    return errorHandler(
      res,
      error,
      'Some error occurred while fetching expenses.'
    );
  }
};

// Create New Expense
export const createNewExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    if (!title || !amount) {
      return errorHandler(
        res,
        {},
        'Please provide the title & amount for expense.',
        400
      );
    }

    const newExpense = await Expense.create({ title, amount, category });
    return res.status(201).json(newExpense);
  } catch (error) {
    return errorHandler(
      res,
      error,
      'Some error occurred while creating expense.'
    );
  }
};

// Delete Expense
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByPk(id);

    if (!expense)
      return errorHandler(
        res,
        null,
        `Delete failed: Expense with id: ${id} not found.`,
        400
      );

    await Expense.destroy({ where: { id } });
    return res
      .status(204)
      .json({ message: `Expense with id:${id} deleted successfully.` });
  } catch (error) {
    return errorHandler(
      res,
      error,
      'Some error occurred while deleting expense.'
    );
  }
};

// Update Expense (PUT - update entire expense record)
export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category } = req.body;

    const expense = await Expense.findByPk(id);

    if (!expense)
      return errorHandler(
        res,
        null,
        `Update failed: Expense with id: ${id} not found.`,
        400
      );

    await expense.update({ title, amount, category });
    return res.status(200).json(expense);
  } catch (error) {
    return errorHandler(
      res,
      error,
      'Some error occurred while updating expense.'
    );
  }
};

export const patchExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findByPk(id);

    if (!expense)
      return errorHandler(
        res,
        null,
        `Update failed: Expense with id: ${id} not found.`,
        400
      );

    await expense.update(req.body);
    return res.status(200).json(expense);
  } catch (error) {
    return errorHandler(
      res,
      error,
      'Some error occurred while updating expense.'
    );
  }
};
