import { useContext, useEffect, useState } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { AssetsContext } from "../store/Provider";

const LandingNav = () => {
  const { products, wishlist } = useContext(AssetsContext);
  const [color, setColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setColor(true);
    }
  }, []);

  const isActive = (path) => location.pathname === path;

  const items = (
    <>
      <li>
        <Link
          to="/"
          className={`text-[12px] md:text-[16px] font-bold hover:underline ${
            isActive("/") ? "underline" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/statistics"
          className={`text-[12px] md:text-[16px] font-bold hover:underline ${
            isActive("/statistics") ? "underline" : ""
          }`}
        >
          Statistics
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className={`text-[12px] md:text-[16px] font-bold hover:underline ${
            isActive("/dashboard") ? "underline" : ""
          }`}
        >
          Dashboard
        </Link>
      </li>

      <li>
        <Link
          to="/discount"
          className={`text-[12px] md:text-[16px] font-bold hover:underline ${
            isActive("/dashboard") ? "underline" : ""
          }`}
        >
          Discount
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar text-white rounded-t-[32px] py-4 lg:px-12 xl:px-16 ${
        color ? "bg-[#9538E2]" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#9538E2] border-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
          >
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg md:text-xl font-semibold md:font-bold">
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Link
          to="/dashboard/cart"
          className="p-2 bg-white rounded-full relative"
        >
          <CiShoppingCart className="text-black h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7" />
          {products.length > 0 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-red-500 text-white text-[10px] flex justify-center items-center">
              {products.length}
            </div>
          )}
        </Link>
        <Link
          to="/dashboard/wishlist"
          className="p-2 bg-white rounded-full relative"
        >
          <CiHeart className="text-black h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7" />
          {wishlist.length > 0 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-red-500 text-white text-[10px] flex justify-center items-center">
              {wishlist.length}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default LandingNav;
