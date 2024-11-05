import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import OnDiscount from "./OnDiscount";

const Discount = () => {
  document.title = "Discount - Gadget Heaven";
  return (
    <div>
      <div className="px-2 py-1 lg:px-16 md:px-6 md:py-4 lg:py-6 font-sora bg-[#F6F6F6]">
        <Navbar />
        <div className="bg-[#9538E2] text-white py-2 md:py-6 lg:py-8 xl:py-16">
          <h1 className="text-[24px] md:text-[32px] lg:text-[48px] xl:text-[56px] font-bold text-center ">
            Get Upto 30% Off
          </h1>
          <p className="text-center text-[12px] md:text-[16px] lg:text-[20px] font-semibold">
            You can get any product at discounted price.
          </p>
        </div>
        <div className="mt-3 md:mt-6">
          <OnDiscount />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discount;
