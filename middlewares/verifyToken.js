import jwt from "jsonwebtoken";
import { error } from "../utils/apiResponse.js";
import { jwtSecret } from "../utils/jwtSecret.js";

export function verifyToken(req, res, next) {
  const authorized = req.headers["authorization"];

  if (!authorized) {
    return res.status(403).json(error("Access denied. No token provided"));
  }

  const token = authorized.split(" ")[1];

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json(error("Token expired. Please log in again."));
      }

      return res.status(401).json(error(`Unauthorized: ${err.message}`));
    }
    req.userId = decoded.userId;
    next();
  });
}
