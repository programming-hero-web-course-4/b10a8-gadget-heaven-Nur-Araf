import { CiShoppingCart } from "react-icons/ci";import { CiHeart } from "react-icons/ci";

const LandingNav = () => {
  const items = (
    <>
      <li>
        <a className="text-[16px] font-bold hover:underline">Home</a>
      </li>

      <li>
        <a className="text-[16px] font-bold hover:underline">Statistics</a>
      </li>

      <li>
        <a className="text-[16px] font-bold hover:underline">Dashboard</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#9538E2] text-white rounded-t-[32px] py-4 lg:px-12 xl:px-16">
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
            className="menu menu-sm dropdown-content bg-[#9538E2] border-white rounded-box z-[1] mt-3 w-52 p-2
             shadow-xl"
          >
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg md:text-xl font-semibold md:font-bold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="p-2 bg-white rounded-full">
          <CiShoppingCart className="text-black h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7" />
        </div>
        <div className="p-2 bg-white rounded-full">
          <CiHeart className="text-black h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7" />
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
