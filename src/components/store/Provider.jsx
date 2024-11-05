
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

  const removeFromCart = (item) => {
    setProducts((prevProducts) => prevProducts.filter((i) => i !== item));
  };

  const addToFavorites = (item) => {
    if (wishlist.includes(item)) {
      return;
    }
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromFavorites = (item) => {
    setWishlist((prevWishlist) => prevWishlist.filter((i) => i !== item));
  }

  return (
    <AssetsContext.Provider
      value={{
        products,
        addToCart,
        addToFavorites,
        wishlist,
        removeFromCart,
        removeFromFavorites,
        setProducts,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsProvider;
