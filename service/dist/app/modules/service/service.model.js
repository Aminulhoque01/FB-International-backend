"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const expenseSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, minlength: 3 },
    amount: { type: Number, required: true, min: 0.01 },
    category: { type: String, required: true, enum: ['Food', 'Transport', 'Shopping', 'Others'] },
    date: { type: Date, required: true },
});
exports.Service = mongoose_1.default.model("Expense", expenseSchema);
