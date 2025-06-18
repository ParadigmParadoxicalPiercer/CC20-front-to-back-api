import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //To do overview register
    /* 
    0.
    1. Check body
    2. Check email in db
    3. Bcryptjs password
    4. Save to db --> prisma
    5. response

  */
    // step 1 check body
    console.log(req.body);
    const { email, name, password } = req.body;

    // step 2 check email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (user) {
      createError(400, "Email already exists");
    }
    // step 3 Encrypt password
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    res.json({ message: "This is register" });
  } catch (error) {
    next(error);
  }
};

export const login = (req, res) => {
  // code body
  res.json({ message: "this is LOGIN" });
};
