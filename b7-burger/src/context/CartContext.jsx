import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [showCart, setShowCart] = useState(false);
const [cartList, setCartList] = useState([]);

  return <CartContext.Provider value={{showCart, setShowCart, cartList, setCartList}}>{children}</CartContext.Provider>;
};
