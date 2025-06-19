import express from "express";
// Controllers
import {
  listUser,
  readUser,
  createUser,
  updateRoleUser,
  deleteUser,
} from "../controllers/user.js";
//middlewares
import { authCheck } from "../middlewares/auth.middleware.js";

const router = express.Router();

//ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
// router.get("/users", (req, res) => {
//   //code body
//   res.json({ message: "This is GET Users" });
// });
router.get("/user", readUser);
// router.get("/user", (req, res) => {
//   //code body
//   res.json({ message: "This is get user" });
// });
router.post("/user", createUser);
// router.post("/user", (req, res) => {
//   //code body
//   res.json({ message: "this is POST user" });
// });
router.patch("/user/role/:id", authCheck, updateRoleUser);
// router.patch("/user/role/:id", (req, res) => {
//   //code body
//   // console.log(req.params.id);
//   const { id } = req.params;
//   console.log(id);

//   res.json({ message: "this is PATCH role/id" });
// });
router.delete("/user/:id", authCheck, deleteUser);
// router.delete("/user/:id", (req, res) => {
//   // code body
//   const { id } = req.params;

//   res.json({ message: `this is DELETE ${id}` });
// });

//Export router
export default router;
