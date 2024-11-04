import React from "react";

const Footer = () => {
  return (
    <div className="bg-white px-2 py-1 lg:px-16 md:px-6 md:py-4 lg:py-8 font-sora">
      <div className="h-4 md:h-8 lg:h-16 xl:h-24"></div>
      <div className="pb-2 md:pb-4 lg:pb-8">
        <h1 className="md:text-[24px] text-[18px] lg:text-[32px] font-bold text-black text-center">
          Gadget Heaven
        </h1>
        <p className="text-center text-[15px] text-gray-700 lg:text-[16px]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <div className="text-black grid grid-cols-2 gap-5 md:p-4 p-2 md:flex  md:flex-row justify-around items-center">
        <div className="flex flex-col gap-2">
          <h6 className=" text-[16px] lg:text-[18px] font-semibold lg:font-bold text-black mb-1 md:mb-2 lg:mb-3">
            Services
          </h6>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Product Support
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Order Tracking
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Shipping & Delivery
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Returns
          </a>
        </div>
        <div className="flex flex-col gap-2 pb-7">
          <h6 className=" text-[16px] lg:text-[18px] font-semibold lg:font-bold text-black mb-1 md:mb-2 lg:mb-3">
            Company
          </h6>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            About us
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Careers
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2 md:pb-7">
          <h6 className=" text-[16px] lg:text-[18px] font-semibold lg:font-bold text-black mb-1 md:mb-2 lg:mb-3">
            Legal
          </h6>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Terms of use
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Privacy policy
          </a>
          <a className="link link-hover text-[15px] text-gray-700 lg:text-[16px]">
            Cookie policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
