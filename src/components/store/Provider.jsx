
import { createContext, useState } from "react";

export const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const addToCart = (item) => {
    if (products.includes(item)) {
      return;
    }
    setProducts((prevProducts) => [...prevProducts, item]);
  };

  const addToFavorites = (item) => {
    if (wishlist.includes(item)) {
      return;
    }
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  return (
    <AssetsContext.Provider
      value={{ products, addToCart, addToFavorites, wishlist }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsProvider;
