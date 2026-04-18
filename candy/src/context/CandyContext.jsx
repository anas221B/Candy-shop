/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";

const CandyContext = createContext();

export const CandyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (candy) => {
    setCart((prev) => [...prev, { ...candy, cartId: Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <CandyContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CandyContext.Provider>
  );
};

// Custom hook for easy access
export const useCandy = () => useContext(CandyContext);
