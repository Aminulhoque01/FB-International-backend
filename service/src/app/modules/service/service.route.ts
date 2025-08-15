import { Router } from "express";
 
import { ServiceController } from "./service.controller";
 

const router = Router();

router.post("/create-service", ServiceController.createService);
router.get("/", ServiceController.getAllService);

router.get('/:id', ServiceController.getSingleService);
router.patch("/:id", ServiceController.updatedService);
router.delete("/:id", ServiceController.deleteService)
 

export const ServcieRoute = router;
