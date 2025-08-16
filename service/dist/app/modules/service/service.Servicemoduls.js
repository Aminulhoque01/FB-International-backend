"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const service_model_1 = require("./service.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createService = (title, amount, category, date) => __awaiter(void 0, void 0, void 0, function* () {
    if (!title || title.length < 3) {
        throw new Error('Title must be at least 3 characters');
    }
    if (!amount || amount <= 0) {
        throw new Error('Amount must be greater than 0');
    }
    if (!category || !['Food', 'Transport', 'Shopping', 'Others'].includes(category)) {
        throw new Error('Invalid category');
    }
    if (!date || isNaN(new Date(date).getTime())) {
        throw new Error('Invalid date');
    }
    const expense = new service_model_1.Service({ title, amount, category, date });
    return yield expense.save();
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const expenses = yield service_model_1.Service.find().sort({ date: -1 });
    return expenses;
});
;
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_model_1.Service.findById(id);
    if (!service) {
        throw new ApiError_1.default(404, "Service not found");
    }
    return service;
});
const updatedService = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_model_1.Service.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
    });
    if (!service) {
        throw new ApiError_1.default(404, "Service not found");
    }
    return service;
});
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.deleteOne({ _id: id });
    return result;
});
exports.ServiceService = {
    createService,
    getAllService,
    getSingleService,
    updatedService,
    deleteService
};
