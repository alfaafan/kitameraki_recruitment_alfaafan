import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const jwtSecret = process.env.JWT_SECRET;
export const refreshSecret = process.env.JWT_REFRESH_SECRET;

export const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, jwtSecret, { expiresIn: "15m" });
  return accessToken;
};

export const generateRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ userId }, refreshSecret, { expiresIn: "7d" });
  return refreshToken;
};
