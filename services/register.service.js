import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const register = async (username, password) => {
  try {
    const existingAccount = await User.findOne({ username });

    if (existingAccount) {
      return { success: false, message: "Username already exist" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return {
      success: true,
      message: "User registered",
      data: {
        _id: user._id,
        username: user.username,
        createdAt: user.createdAt,
      },
    };
  } catch (e) {
    return {
      success: false,
      message: "Register failed",
    };
  }
};
