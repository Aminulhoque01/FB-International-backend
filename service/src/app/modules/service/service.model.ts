import mongoose from 'mongoose';
import { IExpense } from './service.interface';

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  amount: { type: Number, required: true, min: 0.01 },
  category: { type: String, required: true, enum: ['Food', 'Transport', 'Shopping', 'Others'] },
  date: { type: Date, required: true },
});

 
export const Service = mongoose.model<IExpense>("Expense", expenseSchema);