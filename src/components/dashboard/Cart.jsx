import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AssetsContext } from "../store/Provider";
import { mainProducts } from "../data/Products";
import { MdDeleteOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  window.title = "Dashboard - Gadget Heaven";
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { products, removeFromCart, setProducts } = useContext(AssetsContext);
  const modalRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (selectedProducts.includes(products)) {
      return;
    }
    const storeProducts = mainProducts.filter((p) =>
      products.includes(p.product_id)
    );
    setSelectedProducts(storeProducts);
  }, [products]);

  const handleDelete = (id) => {
    toast.success("Product removed from cart!");
    removeFromCart(id);
    setSelectedProducts(selectedProducts.filter((p) => p.product_id !== id));
  };

  const handleBuy = () => {
    toast.success("Successfully purchased!");
    setProducts([]); 
    setSelectedProducts([]); 
    if (modalRef.current) {
      modalRef.current.close(); 
    }
    navigate("/");
  };

  const handleShortByPrice = () => {
    const sortedProducts = [...selectedProducts];
    sortedProducts.sort((a, b) => b.price - a.price);
    setSelectedProducts(sortedProducts);
  };

  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <div className="mt-3 md:mt-5 lg:mt-10 md:mx-10 lg:mx-20">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-[16px] md:text-[20px] md:font-bold lg:text-[24px]">
          Cart
        </h1>
        <div className="flex justify-between items-center gap-2 md:gap-4">
          <h1 className="font-medium text-[12px] md:text-[20px] md:font-bold lg:text-[24px]">
            Total cost: ${totalPrice}
          </h1>
          <button
            className="text-[#9538E2] border text-[12px] md:text-base border-[#9538E2] rounded-[32px] px-[10px] md:px-[18px] lg:px-[22px] py-[6px] md:py-[11px] lg:py-[13px] cursor-pointer"
            onClick={handleShortByPrice}
          >
            Sort by Price
          </button>
          <button
            className="bg-[#9538E2] text-[12px] md:text-base text-white rounded-[32px] px-[10px] md:px-[20px] lg:px-[26px] py-[6px] md:py-[11px] lg:py-[13px] cursor-pointer"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="mt-3 md:mt-5 lg:mt-8">
        {products.length === 0 ? (
          <div className="font-medium text-[16px] md:text-[20px] md:font-bold lg:text-[24px] text-center bg-white shadow-md rounded-[16px] h-24">
            <p className="pt-8">Cart is empty</p>
          </div>
        ) : (
          <>
            {selectedProducts.map((product) => (
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
                <dialog id="my_modal_5" className="modal" ref={modalRef}>
                  <div className="modal-box">
                    <div className="space-y-1 md:space-y-3">
                      <div className="flex justify-center items-center">
                        <img src="/assets/Group.png" alt="success" />
                      </div>
                      <h1 className="text-center font-bold text-[28px]">
                        Payment Successful
                      </h1>
                      <p className="text-center font-medium">
                        Thanks for shopping with us.
                      </p>
                      <p className="text-center font-semibold text-[18px]">
                        Total cost: ${totalPrice}
                      </p>
                    </div>
                    <div className="modal-action flex justify-center">
                      <form method="dialog">
                        <button className="btn" onClick={handleBuy}>
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            ))}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
