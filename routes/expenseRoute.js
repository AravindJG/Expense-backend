import express from "express";
import { createEntry } from "../controllers/expenseController.js";
import { getEntries } from "../controllers/expenseController.js";

const router = express.Router();

router.post('/', createEntry);

router.get('/', getEntries);

export default router;