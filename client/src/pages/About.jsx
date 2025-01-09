import React from "react";
import Title from "../components/Title";
import assets from "../assets/assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Urbanvault Where your shopping dreams come alive—explore a world of
            unique treasures, personalized service, and lightning-fast delivery
            that redefines convenience
          </p>
          <p>
            Discover a seamless shopping experience with our curated selection
            of high-quality products, exceptional customer service, and fast
            delivery, all designed to meet your needs.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At UrbanVault, we empower customers to discover high-quality,
            sustainable products that enhance their lives, all while providing a
            seamless and trustworthy online shopping experience. Our commitment
            to exceptional service and ethical practices fosters lasting
            relationships within our global community."
          </p>
        </div>
      </div>
      <div className="text-xl py-4 mt-3">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Quality Assurance : </b>
          <p className="text-gray-600">
            We ensure that every product meets our high standards of quality and
            reliability, providing you with peace of mind in every purchase.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Convenience : </b>
          <p className="text-gray-600">
            Enjoy a hassle-free shopping experience with fast delivery and easy
            navigation tailored to your needs.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-xl">Exceptional Customer Service : </b>
          <p className="text-gray-600">
            Exceptional customer service transforms ordinary transactions into
            meaningful relationships, fostering loyalty and trust that keep
            customers coming back.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
