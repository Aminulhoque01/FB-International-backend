import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { Service } from "./service.model";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { ServiceService } from "./service.Servicemoduls";
 


const createService = catchAsync(async (req: Request, res: Response) => {
    const { title, amount, category, date } = req.body;
    console.log('Request Body:', req.body);

    // Validation
    const result = await ServiceService.createService(title,amount,category,date)
 

    sendResponse(res, {
        code: StatusCodes.OK,
        message: "Service create sessfully",
        data: result,
    })

});


const getAllService = catchAsync(async(req:Request, res:Response)=>{
     
    const result = await ServiceService.getAllService();

    sendResponse(res,{
        code: StatusCodes.OK,
        message: "Service all sessfully",
        data: result,
    })
});


const getSingleService = catchAsync(async(req:Request, res:Response)=>{
    const {id} = req.params;

    const result = await ServiceService.getSingleService(id);

    sendResponse(res,{
        code: StatusCodes.OK,
        message: "Service singel sessfully",
        data: result,
    })
});

const updatedService = catchAsync(async(req:Request,res:Response)=>{
    const {id}= req.params;
    const updates = req.body;
    const result = await ServiceService.updatedService(id, updates);
    sendResponse(res,{
        code: StatusCodes.OK,
        message: "Service updated sessfully",
        data: result,
    })
})


const deleteService = catchAsync(async(req:Request,res:Response)=>{
     const {id}= req.params;
      const result = await ServiceService.deleteService(id,);
    sendResponse(res,{
        code: StatusCodes.OK,
        message: "Service deleted sessfully",
        data: result,
    })

})


export const ServiceController = {
    createService,
    getAllService,
    getSingleService,
    updatedService,
    deleteService
}