import { createContext, useEffect, useReducer, useState } from "react";
import filterReducer from "../reducers/FilterReducer";

export const NewsletterContext = createContext();

export const NewsletterProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [showRegisteredEmailAlert, setShowRegisteredEmailAlert] =
    useState(false);
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showFilterAndSort, setShowFilterAndSort] = useState(false);
  const [state, dispatch] = useReducer(filterReducer, []);
  const [hideErrorMessage, setHideErrorMessage] = useState(true);
  const [validRange, setValidRange] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((data) => data.json())
      .then((data) => {
        setProductList(data);
        setHideErrorMessage(true);
      })
      .catch((error) => {
        console.error(`Chamada não aceita, erro apresentado: \n ${error}`);
        setHideErrorMessage(false);
      });
  }, []);

  return (
    <NewsletterContext.Provider
      value={{
        email,
        setEmail,
        showRegisteredEmailAlert,
        setShowRegisteredEmailAlert,
        productList,
        setProductList,
        showFilterAndSort,
        setShowFilterAndSort,
        filteredList,
        setFilteredList,
        state,
        dispatch,
        hideErrorMessage,
        setHideErrorMessage,
        validRange, setValidRange
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};
