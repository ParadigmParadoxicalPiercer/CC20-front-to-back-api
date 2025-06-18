import express from "express";
// Controllers
import { register, login } from "../controllers/auth.js";
import { registerSchema, validate } from "../validation/validator.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/auth/users
router.post("/register", validate(registerSchema), register);
router.post("/login", login);

//export
export default router;
