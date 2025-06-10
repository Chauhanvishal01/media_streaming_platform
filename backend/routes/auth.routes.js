import express from "express";
import {
  getLoggedUserProfile,
  login,
  logout,
  register,
} from "../controllers/auth.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getme", isAuthenticated, getLoggedUserProfile);

export default router;
