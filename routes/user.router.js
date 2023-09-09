import express from "express";
import { refreshAccessToken, userLogin, userLogout, userRegister } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/logout", userLogout);
userRouter.post("/refresh-token", refreshAccessToken);

export { userRouter };
