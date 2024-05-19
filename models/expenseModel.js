import mongoose from "mongoose";

const expenseSchema = mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, "Please enter a expense type"]
        },
        amount: {
            type: Number,
            required: [true, "Please enter an amount"]
        }
    },
    {
        timestamps: true
    }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;