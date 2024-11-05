import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { mainProducts } from "../data/Products";
import { CiHeart, CiStar } from "react-icons/ci";
import Rating from "../Rating";
import { CiShoppingCart } from "react-icons/ci";
import { AssetsContext } from "../store/Provider";
import { toast, ToastContainer } from "react-toastify";
const ShowingDetails = () => {
  const { addToCart, addToFavorites } = useContext(AssetsContext);
  
  const handleAddToCart = (id) => {
    toast.success("Product added to cart!");
    addToCart(id);
  };

  const handleAddToFavorites = (id) => {
    toast.success("Product added to wishlist!");
    addToFavorites(id);
  };
  const { id } = useParams();
  const product = mainProducts.find((product) => product.product_id === id);
  return (
    <div>
      <div className="bg-[#9538E2] flex flex-col justify-center items-center gap-3 md:gap-6 py-2 md:py-6 lg:py-8 xl:py-16">
        <h1 className="text-[16px] md:text-[24px] lg:text-[32px] xl:text-[56px] font-bold text-white text-center">
          Product Details
        </h1>
        <p className="text-gray-300 md:text-[16px] text-[12px] text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="h-4 md:h-40 lg:h-48 xl:h-80"></div>
      </div>
      <div className="md:relative mb-4 md:mb-[420px] lg:mb-96 xl:mb-96 ">
        <div className="p-2 md:p-3 lg:p-6 rounded-3xl mt-4 md:mt-0 bg-white mx-[5%] lg:mx-[2%] lg:w-[96%] xl:w-[80%] xl:mx-[10%] md:-translate-y-[30%] lg:-translate-y-[20%] xl:-translate-y-[50%] md:absolute">
          <div className="md:flex gap-6 items-center">
            <div>
              <div className="w-[200px] h-[200px] md:w-[200px] lg:w-[350px] md:h-[200px] lg:h-[350px]">
                <img
                  src={product.product_image}
                  alt={product.product_title}
                  className="w-full h-full object-cover rounded-[32px]"
                />
              </div>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-[16px] md:text-[20px] lg:text-[28px] font-semibold">
                {product.product_title}
              </h1>
              <p className="text-[12px] md:text-[16px] lg:text-[20px] font-semibold">
                Price: ${product.price}
              </p>
              {product.availability === true ? (
                <button className="border border-[#309C08] px-[9px] py-[4px] md:px-[12px] md:py-[5px] lg:px-[14px] lg:py-[7px] bg-gray-200 text-[#309C08] font-bold text-[12px] md:text-[16px] lg:text-[20px] rounded-[32px] hover:bg-[#309C08] hover:text-white">
                  In Stock
                </button>
              ) : (
                <button className="border border-red-500 px-[9px] py-[4px] md:px-[12px] md:py-[5px] lg:px-[14px] lg:py-[7px] bg-gray-200 text-red-500 font-medium md:font-semibold text-[12px] md:text-[16px] lg:text-[20px] rounded-[32px] hover:bg-red-500 hover:text-white">
                  Out of Stock
                </button>
              )}
              <p className="text-gray-700 text-[10px] md:text-[14px] lg:text-[18px]">
                {product.description}
              </p>
              <h1 className="font-bold text-[10px] md:text-[14px] lg:text-[18px]">
                Specification:
              </h1>
              <div>
                {product.uniq === "1" && (
                  <>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.processor}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.ram}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.storage}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.graphics}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.display}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.battery_life}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      7. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:[14px] lg:text-[18px] text-gray-700">
                      8. {product.specification.operating_system}
                    </div>
                  </>
                )}
                {product.uniq === "2" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.processor}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.ram}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.storage}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.camera}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.display}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.battery_life}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      7. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      8. {product.specification.operating_system}
                    </div>
                  </>
                )}
                {product.uniq === "3" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.display}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.resolution}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.processor}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.ram}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.storage}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.battery_life}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      7. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      8. {product.specification.operating_system}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      9. {product.specification.water_resistance}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      10. {product.specification.connectivity}
                    </div>
                  </>
                )}
                {product.uniq === "4" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.display}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.resolution}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.processor}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.ram}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.storage}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.battery_life}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      7. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      8. {product.specification.operating_system}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      9. {product.specification.ports}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      10. {product.specification.graphics}
                    </div>
                  </>
                )}
                {product.uniq === "5" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.connection_type}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.battery_life}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.dpi}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.buttons}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.compatibility}
                    </div>
                  </>
                )}
                {product.uniq === "6" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.capacity}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.output_ports}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.charging_time}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.dimensions}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.compatibility}
                    </div>
                  </>
                )}
                {product.uniq === "7" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.capacity}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.interface}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.read_speed}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.write_speed}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.compatibility}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      7. {product.specification.dimensions}
                    </div>
                  </>
                )}
                {product.uniq === "8" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.connection_type}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.battery_life}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.noise_cancellation}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.features}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.compatibility}
                    </div>
                  </>
                )}
                {product.uniq === "9" && (
                  <>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      1. {product.specification.connection_type}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      2. {product.specification.switch_type}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      3. {product.specification.key_rollover}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      4. {product.specification.weight}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      5. {product.specification.backlighting}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      6. {product.specification.compatibility}
                    </div>
                    <div className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-700">
                      7. {product.specification.dimensions}
                    </div>
                  </>
                )}
                {product.uniq === "10" && (
                  <>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      1. {product.specification.connection_type}
                    </div>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      2. {product.specification.voice_assistant}
                    </div>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      3. {product.specification.features}
                    </div>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      4. {product.specification.weight}
                    </div>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      5. {product.specification.backlighting}
                    </div>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      6. {product.specification.compatibility}
                    </div>
                    <div className="text-[12px] md:text-[18px] text-gray-700">
                      7. {product.specification.dimensions}
                    </div>
                  </>
                )}
              </div>
              <div />
              <div>
                <h1 className="flex items-center text-[10px] md:text-[14px] lg:text-[18px] font-bold">
                  Rating{" "}
                  <svg
                    className="h-4 w-4 md:w-5 md:h-5 ml-2 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.178c.97 0 1.371 1.24.588 1.81l-3.38 2.453a1 1 0 00-.364 1.118l1.286 3.964c.3.921-.755 1.688-1.54 1.118l-3.38-2.453a1 1 0 00-1.175 0l-3.38 2.453c-.785.57-1.84-.197-1.54-1.118l1.286-3.964a1 1 0 00-.364-1.118L2.235 9.391c-.783-.57-.382-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.964zM10 12.5L8.62 13.56l.37-1.136a1 1 0 00-.364-1.118L5.248 9.39h4.503L10 7l.249.745h4.503l-3.378 2.453a1 1 0 00-.364 1.118l.37 1.136L10 12.5z" />
                  </svg>
                </h1>
                <div className="flex items-center gap-3">
                  <Rating rating={product.rating} />
                  <h1 className="text-[10px] md:text-[14px] bg-gray-300 p-1 rounded-full w-fit">
                    {product.rating}
                  </h1>
                </div>
                <div className="flex items-center gap-3 pt-2 md:pt-4">
                  <button
                    className="flex text-[10px] bg-[#9538E2] rounded-[32px] md:text-[14px] lg:text-[18px] font-semibold lg:font-bold text-white items-center gap-2 px-[12px] md:px-[16px] lg:px-[22px] py-[6px] md:py-[8px] lg:py-[11px] cursor-pointer hover:bg-white hover:text-[#9538E2] hover:border hover:border-[#9538E2]"
                    onClick={() => handleAddToCart(product.product_id)}
                  >
                    Add To Card{" "}
                    <CiShoppingCart className=" h-4 w-4 md:h-4 md:w-4 lg:h-6 lg:w-6" />
                  </button>
                  <div
                    className="p-2 bg-white rounded-full border border-gray-300 w-fit cursor-pointer"
                    onClick={() => handleAddToFavorites(product.product_id)}
                  >
                    <CiHeart className="text-black h-4 w-4 md:h-4 md:w-4 lg:h-6 lg:w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowingDetails;
