import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  sendResetOtp,
  resetPassword,
  sendVerifyOtp,
  verifyEmail,
  getUserData,
  emailUpdate,
  nameUpdate,
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

userRouter.post("/send-verify-otp", authUser, sendVerifyOtp);
userRouter.post("/verify-account", authUser, verifyEmail);

userRouter.post("/send-reset-otp", sendResetOtp);
userRouter.post("/reset-password", resetPassword);

userRouter.get("/data", getUserData);

userRouter.patch("/update-email", emailUpdate);
userRouter.patch("/update-name", nameUpdate);

export default userRouter;
