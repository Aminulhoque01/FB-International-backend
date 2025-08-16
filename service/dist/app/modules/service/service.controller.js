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
exports.ServiceController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const service_Servicemoduls_1 = require("./service.Servicemoduls");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, amount, category, date } = req.body;
    console.log('Request Body:', req.body);
    // Validation
    const result = yield service_Servicemoduls_1.ServiceService.createService(title, amount, category, date);
    (0, sendResponse_1.default)(res, {
        code: http_status_codes_1.StatusCodes.OK,
        message: "Service create sessfully",
        data: result,
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_Servicemoduls_1.ServiceService.getAllService();
    (0, sendResponse_1.default)(res, {
        code: http_status_codes_1.StatusCodes.OK,
        message: "Service all sessfully",
        data: result,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_Servicemoduls_1.ServiceService.getSingleService(id);
    (0, sendResponse_1.default)(res, {
        code: http_status_codes_1.StatusCodes.OK,
        message: "Service singel sessfully",
        data: result,
    });
}));
const updatedService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updates = req.body;
    const result = yield service_Servicemoduls_1.ServiceService.updatedService(id, updates);
    (0, sendResponse_1.default)(res, {
        code: http_status_codes_1.StatusCodes.OK,
        message: "Service updated sessfully",
        data: result,
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_Servicemoduls_1.ServiceService.deleteService(id);
    (0, sendResponse_1.default)(res, {
        code: http_status_codes_1.StatusCodes.OK,
        message: "Service deleted sessfully",
        data: result,
    });
}));
exports.ServiceController = {
    createService,
    getAllService,
    getSingleService,
    updatedService,
    deleteService
};
