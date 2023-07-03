import express from "express";
import {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "../controller/taskController.js";
import { getTask } from "../middleware/getTask.js";
const router = express.Router();

router.get("/", getAllTask);
router.post("/", createTask);

router.get("/:id", getTask, getSingleTask);
router.patch("/:id", getTask, updateTask);
router.delete("/:id", getTask, deleteTask);

export default router;
