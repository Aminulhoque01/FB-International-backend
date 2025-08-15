import express from "express";
 
 
import { ServcieRoute } from "../app/modules/service/service.route";

const router = express.Router();

const apiRoutes = [
  {
    path: "/service",
    route: ServcieRoute,
  },
];

apiRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
