import React, { useContext, useEffect, useState } from "react";
import { AssetsContext } from "../store/Provider";
import { mainProducts } from "../data/Products";
import { MdDeleteOutline } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const WiseList = () => {
  document.title = "Dashboard - Gadget Heaven";
  const [wishListProducts, setWishListProducts] = useState([]);
  const { wishlist, addToCart, removeFromFavorites } =
    useContext(AssetsContext);

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  useEffect(() => {
    if (wishListProducts.includes(wishlist)) {
      return;
    }
    const storeProducts = mainProducts.filter((p) =>
      wishlist.includes(p.product_id)
    );
    setWishListProducts(storeProducts);
  }, [wishlist]);
  const handleDelete = (id) => {
    toast.success("Product removed from wishlist");
    removeFromFavorites(id);
    setWishListProducts(wishListProducts.filter((p) => p.product_id !== id));
  };

  return (
    <div className="mt-3 md:mt-5 lg:mt-10 md:mx-10 lg:mx-20">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-[16px] md:text-[20px] md:font-bold lg:text-[24px]">
          WishList
        </h1>
      </div>
      <div className="mt-3 md:mt-5 lg:mt-8">
        {wishlist.length === 0 ? (
          <div className="font-medium text-[16px] md:text-[20px] md:font-bold lg:text-[24px] text-center bg-white shadow-md rounded-[16px] h-24">
            <p className="pt-8">Cart is empty</p>
          </div>
        ) : (
          <>
            {wishListProducts.map((product) => (
              <div
                key={product.product_id}
                className="mb-4 bg-white shadow-md rounded-[16px]"
              >
                <div className="flex justify-between p-2 md:p-4 lg:p-6">
                  <div className="flex items-center md:gap-6 lg:gap-8">
                    <div>
                      <img
                        src={product.product_image}
                        alt={product.product_title}
                        className="object-cover rounded-[16px]"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-3">
                      <h1 className="font-medium text-[16px] md:text-[20px] md:font-bold lg:text-[24px]">
                        {product.product_title}
                      </h1>
                      <p className="text-gray-700 text-[10px] md:text-[14px] lg:text-[18px]">
                        {product.description}
                      </p>
                      <h1 className="font-medium text-[12px] md:text-[16px] md:font-bold lg:text-[20px]">
                        ${product.price}
                      </h1>
                      <button
                        className="flex text-[10px] bg-[#9538E2] rounded-[32px] md:text-[14px] lg:text-[18px] font-semibold lg:font-bold text-white items-center gap-2 px-[12px] md:px-[16px] lg:px-[22px] py-[6px] md:py-[8px] lg:py-[11px] cursor-pointer"
                        onClick={() => handleAddToCart(product.product_id)}
                      >
                        Add To Card
                      </button>
                    </div>
                  </div>
                  <div
                    className="p-1 md:p-2 border border-red-500 rounded-full cursor-pointer mx-2 h-fit w-fit"
                    onClick={() => handleDelete(product.product_id)}
                  >
                    <MdDeleteOutline
                      className=" md:w-4 md:h-4 lg:w-6 lg:h-6"
                      color="red"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default WiseList;
