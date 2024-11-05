import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const btns = [
  { id: 1, name: "Cart", path: "/dashboard/cart" },
  { id: 2, name: "Wishlist", path: "/dashboard/wishlist" },
];

const Header = () => {
  const location = useLocation();
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    const currentBtn = btns.find((btn) => btn.path === location.pathname);
    if (currentBtn) {
      setSelectedId(currentBtn.id);
    } else {
      setSelectedId(1);
    }
  }, [location.pathname]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="bg-[#9538E2] flex flex-col justify-center items-center gap-3 md:gap-6 py-2 md:py-6 lg:py-8 xl:py-14">
      <h1 className="text-[16px] md:text-[20px] lg:text-[28px] xl:text-[32px] font-bold text-white text-center">
        Product Details
      </h1>
      <p className="text-gray-300 md:text-[16px] text-[10px] text-center">
        You can choose your needed product from here also can delete if needed.{" "}
        <br />
        See your Wishlist.
      </p>
      <div className="mt-2 md:mt-4 lg:mt-6 flex gap-2 md:gap-4">
        {btns.map((btn) => (
          <Link
            to={btn.path}
            className={`px-[32px] md:px-[44px] lg:px-[64px] py-[9px] md:py-[11px] lg:py-[13px] border border-white rounded-[32px] text-[14px] md:text-[16px] lg:text-[18px] font-extrabold hover:bg-white hover:text-[#9538E2] ${
              selectedId === btn.id ? "bg-white text-[#9538E2]" : "text-white"
            }`}
            key={btn.id}
            onClick={() => handleClick(btn.id)}
          >
            {btn.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
