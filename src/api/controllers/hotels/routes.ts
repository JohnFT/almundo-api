import { Router } from "express";
import HotelController from "./controller";

const router = Router();

/**
 * Get all hotels  entity
 */
 router.get("/", HotelController.getAll);

/**
 * Get hotel entity by id
 */
router.get("/:id", HotelController.getById);

/**
 * Add hotel entity
 */
router.post("/", HotelController.add);

/**
 * Remove hotel |
 */
router.delete("/:id", HotelController.remove);

export default router;
