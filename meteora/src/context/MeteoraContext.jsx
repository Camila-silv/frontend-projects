import { createContext, useReducer, useState } from "react";
import cartReducer from "../reducers/cartReducer";

export const MeteoraContext = createContext();
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const MeteoraProvider = ({ children }) => {
  const [showModal, setShowModal] = useState({
    showCart: false,
    showAboutProducer: false,
    showRegistrationAlert: false,
    alertPurchasedItem: false,
    itemAlreadyPurchased: false,
    navigation: false
  });

  const [cart, dispatch] = useReducer(cartReducer, initialState);  
  const [productChosenForViewing, setProductChosenForViewing] = useState({});
  const [totalPurchaseValue, setTotalPurchaseValue] = useState(0);
  

  return (
    <MeteoraContext.Provider
      value={{
        productChosenForViewing,
        setProductChosenForViewing,
        totalPurchaseValue,
        setTotalPurchaseValue,
        cart,
        dispatch,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </MeteoraContext.Provider>
  );
};
