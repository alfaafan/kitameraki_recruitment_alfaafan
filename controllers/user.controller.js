import { register } from "../services/register.service.js";
import { error, success } from "../utils/apiResponse.utils.js";
import { login } from "../services/login.service.js";
import jwt from "jsonwebtoken";
import { generateAccessToken, refreshSecret } from "../utils/jwt.utils.js";

export const userRegister = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await register(username, password);

    if (user.message === "Username already exist") {
      return res.status(400).json(error(user.message));
    }

    res.status(201).json(success(user.message, user.data));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await login(username, password);

    if (user.message === "User not found" || user.message === "Wrong password") {
      return res.status(401).json(error(user.message));
    }

    const refreshToken = user.data.refreshToken;

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: false,
    });

    res.status(200).json(success(user.message, user.data));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const userLogout = (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.status(200).json(success("User logged out"));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    jwt.verify(refreshToken, refreshSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json(error(`Unauthorized: ${err.message}`));
      }

      const accessToken = generateAccessToken(decoded.userId);

      res.status(200).json(success("Token refreshed", { accessToken: accessToken }));
    });
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};
