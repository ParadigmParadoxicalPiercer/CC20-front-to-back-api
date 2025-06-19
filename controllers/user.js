import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  // code body
  try {
    const user = await prisma.user.findMany({
      omit: {
        password: true, //ตั้งให้ซ่อน password
      },
    });

    console.log(req.user);

    res.json({
      message: "This is list all users",
      result: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRoleUser = async (req, res, next) => {
  try {
    //1. read parameter & body
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);

    res.json({ message: "This is Update role user" });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  // code body
  try {
    res.json({ message: "This is delete user" });
  } catch (error) {
    next(error);
  }
};

export const readUser = (req, res) => {
  // code body
  res.json({ message: "This is reading user" });
};

export const createUser = (req, res) => {
  // code body
  res.json({ message: "This is POST user" });
};
