import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  sendResetOtp,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

userRouter.post("/send-reset-otp", sendResetOtp);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
