import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const ResetPassword = () => {
  const { backendUrl, token } = useContext(ShopContext);

  // to access cookies
  // axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isEmailSent, setIsEmailSent] = useState("");
  const [otp, setOtp] = useState(0);
  const [isOtpSubmited, setIsOtpSubmited] = useState(false);

  const inputRefs = React.useRef([]);

  //to move the input to next input after inserting 1 number
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  //to delete the number on backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  // to handle paste if someone directly going to paste the otp
  const handlePaste = (e) => {
    //this will store the data from clipboard
    const paste = e.clipboardData.getData("text");
    //this will split the paste data into array of numbers
    const pasteArray = paste.split("");
    //this will loop through the array and focus on each input
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        //this will add each number to each input field
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/send-reset-otp",
        {
          email,
        }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmited(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/reset-password",
        {
          email,
          otp,
          newPassword,
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while resetting password");
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      {/* enter email id */}
      {!isEmailSent && (
        <form
          onSubmit={onSubmitEmail}
          className="text-gray-800 p-8 m-auto mt-14 rounded-lg sm:border-2 sm:border-gray-600 w-90 sm:w-96 text-sm"
        >
          <h1 className="text-3xl font-semibold text-center mb-4">
            Reset Password
          </h1>
          <p className="text-center mb-6 ">
            Enter your registered email address
          </p>
          <div className="mb-4 flex items-center gap-3 px-5 py-2.5 w-full border border-gray-800">
            <img src={assets.mail_icon} alt="" className="w-3 h-3" />
            <input
              type="email"
              placeholder="Email Id"
              className="bg-transparent outline-none text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="bg-black text-white font-light py-2 mt-4 w-full">
            Submit
          </button>
        </form>
      )}

      {/* otp input form */}

      {!isOtpSubmited && isEmailSent && (
        <form
          onSubmit={onSubmitOtp}
          className="text-gray-800 p-8 m-auto mt-14 rounded-lg sm:border-2 sm:border-gray-600 w-90 sm:w-96 text-sm"
        >
          <h1 className="text-3xl font-semibold text-center mb-4">
            Reset Password OTP
          </h1>
          <p className="text-center mb-6 ">
            Enter the 6-digit code sent to your email id.
          </p>
          <div className="flex justify-between mb-8 " onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  required
                  className="w-11 sm:w-12 h-12 bg-[#d1d5e8cc] text-wrap text-center text-gray-700 text-xl rounded-md"
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
          </div>
          <button className="bg-black text-white font-light py-2 mt-4 w-full">
            Submit
          </button>
        </form>
      )}

      {/* enter New Password form */}

      {isOtpSubmited && isEmailSent && (
        <form
          onSubmit={onSubmitNewPassword}
          className="text-gray-800 p-8 m-auto mt-14 rounded-lg sm:border-2 sm:border-gray-600 w-90 sm:w-96 text-sm"
        >
          <h1 className="text-3xl font-semibold text-center mb-4">
            New Password
          </h1>
          <p className="text-center mb-6 ">Enter the new password below</p>
          <div className="mb-4 flex items-center gap-3 px-5 py-2.5 w-full border border-gray-800">
            <img src={assets.lock_icon} alt="" className="w-3 h-3" />
            <input
              type="password"
              placeholder="New Password"
              className="bg-transparent outline-none text-gray-700"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button className="bg-black text-white font-light py-2 mt-4 w-full">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
