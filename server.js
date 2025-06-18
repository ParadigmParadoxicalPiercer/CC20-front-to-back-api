import express from "express";
import cors from "cors";
import morgan from "morgan";
//Routing
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();

//basic middlewares
app.use(cors()); //allow cross-origin/domain requests
app.use(morgan("dev")); //Show log/requests
app.use(express.json()); // for parsing application/ json  to read body of request

//Routing GET, POST, PUT, PATCH, DELETE
//http://localhost:8000
// app.get("/", (req, res) => {
//   //code body
//   res.json({ message: "Hello CC20" });
// });
app.use("/api", userRouter);
app.use("/auth", authRouter);

const port = 8000;
//start server
app.listen(8000, () => console.log(`Server is running on port ${port}`));
