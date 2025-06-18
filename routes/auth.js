import express from "express";
// Controllers
import { register, login } from "../controllers/auth.js";
//validate with yup
import { object, string } from "yup";

const validate = (schema) => (req, res, next) => {
  //code body
  try {
    console.log("This is validate");
    next();
  } catch (error) {
    next(error);
  }
};

const router = express.Router();

// ENDPOINT http://localhost:8000/auth/users
router.post("/register", register);
router.post("/login", login);

//export
export default router;
