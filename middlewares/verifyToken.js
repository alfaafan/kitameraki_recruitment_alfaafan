import jwt from "jsonwebtoken";
import { error } from "../utils/apiResponse.utils.js";
import { jwtSecret } from "../utils/jwt.utils.js";

export function verifyToken(req, res, next) {
  const authorized = req.headers["authorization"];

  if (!authorized) {
    return res.status(403).json(error("Access denied. No token provided"));
  }

  const accessToken = authorized.split(" ")[1];

  jwt.verify(accessToken, jwtSecret, (err, decoded) => {
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
