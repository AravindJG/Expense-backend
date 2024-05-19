import Expense from "../models/expenseModel.js";
import asyncHandler from "express-async-handler";

const createEntry = asyncHandler(async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.status(200).json(expense);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const getEntries = asyncHandler(async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

export { createEntry, getEntries };