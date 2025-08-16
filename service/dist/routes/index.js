"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_route_1 = require("../app/modules/service/service.route");
const router = express_1.default.Router();
const apiRoutes = [
    {
        path: "/service",
        route: service_route_1.ServcieRoute,
    },
];
apiRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
