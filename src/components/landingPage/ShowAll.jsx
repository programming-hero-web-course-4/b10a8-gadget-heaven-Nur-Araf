import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const btns = [
  { id: 1, name: "All Products", path: "/" },
  { id: 2, name: "Laptop", path: "Laptop" },
  { id: 3, name: "Phone", path: "Phone" },
  { id: 4, name: "Accessories", path: "Accessories" },
  { id: 5, name: "Smart Watches", path: "Smart-Watches" },
  { id: 6, name: "MacBook", path: "MacBook" },
  { id: 7, name: "iPhone", path: "iPhone" },
];

const ShowAll = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const currentPath = window.location.pathname.replace("/", "");
    const currentBtn = btns.find((btn) => btn.path === currentPath);
    if (currentBtn) {
      setActive(currentBtn.id);
    } else {
      setActive(1);
    }
  });
  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="pt-6 md:pt-20 pb-4">
      <div className=" lg:h-12 xl:h-16"></div>
      <h1 className="md:text-[28px] lg:text-[40px] font-bold text-center text-black mb-4 md:mb-6 lg:mb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-4">
        <div>
          <div className="col-span-1 md:col-span-1 flex flex-col space-y-1 md:space-y-2 lg:space-y-4 p-1 md:p-2 lg:p-4 bg-white shadow-md rounded-[16px]">
            {btns.map((btn) => (
              <Link
                to={btn.path}
                key={btn.id}
                className={`px-[12px] py-[6px] md:px-[20px] md:py-[10px] lg:px-[28px] lg:py-[14px] rounded-full text-[12px] md:text-[14px] lg:text-[18px] font-semibold ${
                  active === btn.id
                    ? "bg-[#9538E2] text-white"
                    : "bg-gray-300 text-gray-700"
                } hover:bg-[#9538E2] hover:text-white`}
                onClick={() => handleClick(btn.id)}
              >
                {btn.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ShowAll;
