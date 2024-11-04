import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#9538E2] rounded-b-[32px] flex flex-col justify-center items-center gap-3 md:gap-6 py-2 md:py-6 lg:py-8 xl:py-16">
        <h1 className="text-[24px] md:text-[32px] lg:text-[48px] xl:text-[56px] font-bold text-white text-center">
          Upgrade Your Tech Accessorize
          <br className="md:hidden" /> with <br className="hidden lg:block" />
          Gadget Heaven Accessories
        </h1>
        <p className="text-gray-300 md:text-[16px] text-[12px] text-center">
          Explore the latest gadgets that will take your experience{" "}
          <br className="md:hidden" /> to the next level. From smart devices{" "}
          <br className="hidden lg:block" />
          to the coolest <br className="md:hidden" /> accessories, we have it
          all!
        </p>
        <Link
          to=""
          className="px-[16px] py-[8px] md:px-[22px] md:py-[11px] lg:px-[30px] lg:py-[15px] bg-white text-[#9538E2] font-bold text-[16px] md:text-[18px] lg:text-[20px] rounded-[32px]"
        >
          Shop Now
        </Link>
        <div className="h-24 md:h-40 lg:h-48 xl:h-56"></div>
      </div>
      <div className="relative mb-28 md:mb-44 lg:mb-52 xl:mb-60">
        <div className="p-2 md:p-3 lg:p-6 rounded-3xl bg-transparent border border-gray-400 mx-[15%]  w-[70%] -translate-y-[50%] absolute">
          <div className="w-full xl:h-[500px] rounded-3xl">
            <img
              src="/assets/banner.jpg"
              alt="none"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
