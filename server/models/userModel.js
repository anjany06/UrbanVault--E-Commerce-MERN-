import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
    verifyOtp: {
      type: String,
      default: "",
    },
    verificationOtpExpiresAt: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String,
      default: "",
    },
    resetOtpExpiresAt: {
      type: Number,
      default: 0,
    },
  },
  { minimize: false }
);

//minimize false yeh isliye likha kyuki by default mongodb empty value ko neglect kr deta hai
//isliye hume minimize false likhna pdta hai taaki hm cart ko baad me use kr ske

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
