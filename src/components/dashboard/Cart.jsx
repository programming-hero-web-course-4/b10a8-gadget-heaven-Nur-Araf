import React, { useContext, useEffect, useState } from "react";
import { AssetsContext } from "../store/Provider";
import { mainProducts } from "../data/Products";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { products } = useContext(AssetsContext);

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
    setSelectedProducts(selectedProducts.filter((p) => p.product_id !== id));
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
            className="text-[#9538E2] border  text-[12px] md:text-base border-[#9538E2] rounded-[32px] px-[10px] md:px-[18px] lg:px-[22px] py-[6px] md:py-[11px] lg:py-[13px] cursor-pointer"
            onClick={() => handleShortByPrice()}
          >
            Sort by Price
          </button>
          <button className="bg-[#9538E2] text-[12px] md:text-base text-white rounded-[32px] px-[10px] md:px-[20px] lg:px-[26px] py-[6px] md:py-[11px] lg:py-[13px] cursor-pointer">
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
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
