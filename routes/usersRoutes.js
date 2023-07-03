import express from "express";
import { register, login, getAllUsers } from "../controller/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allUsers", getAllUsers);

export default router;
