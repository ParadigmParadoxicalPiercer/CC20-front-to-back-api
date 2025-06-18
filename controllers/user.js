import { createError } from "../utils/createError.js";

export const listUser = (req, res, next) => {
  // code body
  try {
    // 1. Check Email
    if (true) {
      createError(400, "Email already exist");
    } else {
      throw new Error("somethings wrong");
    }
    res.json({ message: "This is list all users" });
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
export const updateRoleUser = (req, res) => {
  // code body
  res.json({ message: "This is Update role user" });
};
export const deleteUser = (req, res) => {
  // code body
  res.json({ message: "This is delete user" });
};
