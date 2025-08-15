import { error } from "console";
import { IExpense } from "./service.interface";
import { Service } from "./service.model"; 
import ApiError from "../../../errors/ApiError";

 const createService = async (title: string, amount: number, category: string, date: string): Promise<IExpense | null> => {
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

    const expense = new Service({ title, amount, category, date });
    return await expense.save();
};


const getAllService = async()=>{
    const expenses = await Service.find().sort({ date: -1 });
    return expenses
   
};;

const getSingleService = async (id: string) => {
    const service = await Service.findById(id);
    if (!service) {
        throw new ApiError(404, "Service not found");
    }
    return service;
};


const updatedService = async (id: string, updates: Partial<IExpense>) => {
    const service = await Service.findByIdAndUpdate(id, updates, {
        new: true,        
        runValidators: true,  
    });

    if (!service) {
        throw new ApiError(404, "Service not found");
    }

    return service;
};

const deleteService = async (id: string) => {
    const result = await Service.deleteOne({ _id: id });
    return result;  
};


export const ServiceService ={
    createService,
    getAllService,
    getSingleService,
    updatedService,
    deleteService
}