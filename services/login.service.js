import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.utils.js";

export const login = async (username, password) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return { success: false, message: "User not found" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { success: false, message: "Wrong password" };
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    return { success: true, message: "Login success", data: { _id: user._id, username: user.username, accessToken: accessToken, refreshToken: refreshToken } };
  } catch (e) {
    return { success: false, message: e.message };
  }
};
