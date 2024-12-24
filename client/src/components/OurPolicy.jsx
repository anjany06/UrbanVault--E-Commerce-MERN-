import React from "react";
import assets from "../assets/assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto -mb-0.5"
          alt=""
        />
        <p>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto -mb-0.5" alt="" />
        <p>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto -mb-0.5" alt="" />
        <p>Best Customer Support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
