import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1h" });

    return { success: true, message: "Login success", data: { _id: user._id, username: user.username, token: token } };
  } catch (e) {
    return { success: false, message: e.message };
  }
};
