import express from "express";
import {
  creatWorkout,
  getWorkoutes,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutControllers.js";
import { authentication } from "../middleWares/authentication.js";

const router = express.Router();

router.use(authentication)

router.get("/", getWorkoutes);

router.get("/:id", getWorkout);

router.post("/", creatWorkout);

router.delete("/:id", deleteWorkout);

router.put("/:id", updateWorkout);

export default router;
