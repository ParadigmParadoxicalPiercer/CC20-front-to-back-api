import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  // code body
  try {
    //TODO overviews
    /*
      
      2. split token bearer
      3. veryfy jwt
      4. create req.user
    */

    //1.check header
    const header = req.headers["authorization"];
    // console.log(header);
    if (!header) {
      createError(401, "Token is missing");
    }
    //2. split token
    // console.log(header);
    const token = header.split(" ")[1];
    // console.log(token);

    //3. verify token
    jwt.verify(token, process.env.SECRET, (error, decode) => {
      // console.log(error);
      // console.log(decode);
      if (error) {
        createError(401, "Token is invalid");
      }

      req.user = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};
