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

    // step 4 save to db
    const result = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });

    res.json({ message: `register ${result.name} success` });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    //TODO
    /*
    1. validate body
    2. check body
    3. check email in d 
    4. check pwd
    5. create token
    6. response
  */

    //step2 check body
    const { email, password } = req.body;

    //step3 check email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (!user) {
      createError(400, "Email invalid");
    }

    //step4 check password
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      createError(400, "Password invalid");
    }

    //step 5 generate
    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.json({
      message: `Login success, Welcome back ${user.name}`,
      payload: payload,
      token: token,
    });

    // code body
    res.json({ message: "this is LOGIN" });
  } catch (error) {
    next(error);
  }
};
