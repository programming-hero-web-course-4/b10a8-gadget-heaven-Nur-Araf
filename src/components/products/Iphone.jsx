import React from 'react'
import { Link } from 'react-router-dom';
import { iphone } from '../data/Products';

const Iphone = () => {
  return (
    <div>
      {iphone.length === 0 && (
        <div>
          <p className="text-center bg-white rounded md:text-[20px] text-[14px] font-semibold md:font-bold">
            No iPhone found
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 bg-[#F6F6F6]">
        {iphone.map((item) => (
          <div
            key={item.product_id}
            className="p-2 md:p-3 bg-white shadow-md rounded-[16px]"
          >
            <div className="pb-2 md:pb-3 lg:pb-6 pt-0 md:pt-2 lg:pt-3">
              <div className="flex justify-center items-center mb-3 md:mb-5 lg:mb-10">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="object-cover rounded-[16px]"
                />
              </div>
              <h2 className="text-[16px] md:text-[18px] lg:text-[24px] font-semibold md:mb-2">
                {item.product_title}
              </h2>
              <p className="text-gray-600 text-[14px] md:text-base lg:text-lg">
                Price: ${item.price}
              </p>
              <div className="mt-4 md:mt-5 lg:mt-8">
                <Link
                  to={`/product/${item.product_id}`}
                  className="rounded-[32px] text-[#9538E2] border-[#9538E2] border px-[12px] md:px-[16px] lg:px-[22px] py-[7px] md:py-[9px] lg:py-[13px] font-semibold text-[14px] md:text-[16px] lg:text-[18px]"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;