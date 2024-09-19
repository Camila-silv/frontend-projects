import { useContext, useState } from "react";
import { NewsletterContext } from "../../context/newsletterContext";

import { VscClose } from "react-icons/vsc";
import Footer from "./Footer";

import {
  CLEAN,
  FILTER_BY_RANGE,
  UPDATE_A_Z,
  UPDATE_HIGHEST_PRICE,
  UPDATE_LOWEST_PRICE,
  UPDATE_Z_A,
} from "../../reducers/FilterReducer";

import AccordionContent from "./AccordionContent";

export default function FilterContainer() {
  const {
    showFilterAndSort,
    setShowFilterAndSort,
    setValidRange,
    productList,
    dispatch,
  } = useContext(NewsletterContext);

  const [showAccordionOrder, setShowAccordionOrder] = useState(false);
  const [showAccordionByPriceRange, setShowAccordionByPriceRange] =
    useState(false);
  const [filter, setFilter] = useState("");
  const [minimumValue, setMinimumValue] = useState("");
  const [maximumValue, setMaximumValue] = useState("");
  const [hideErrorMessage, setHideErrorMessage] = useState(true);

  const hideSortFilter = () => {
    setShowFilterAndSort(false);
    setShowAccordionOrder(false);
    setShowAccordionByPriceRange(false);
    document.querySelector("body").style.overflow = "scroll";
  };

  const cleanFilter = () => {
    setFilter("");

    hideSortFilter();
    dispatch({ type: CLEAN });
  };

  const filterProductList = () => {
    if (minimumValue != "" || maximumValue != "") {
      if (minimumValue > maximumValue) {
        setHideErrorMessage(false);
        return;
      }
      setHideErrorMessage(true);
      cleanFilter();

      dispatch({
        value: productList,
        type: FILTER_BY_RANGE,
        min: minimumValue,
        max: maximumValue,
        setValidRange: setValidRange,
      });

      setMinimumValue("");
      setMaximumValue("");
      return;
    } else {
      switch (filter) {
        case UPDATE_LOWEST_PRICE:
          hideSortFilter();
          dispatch({ value: productList, type: UPDATE_LOWEST_PRICE });
          break;
        case UPDATE_HIGHEST_PRICE:
          hideSortFilter();
          dispatch({ value: productList, type: UPDATE_HIGHEST_PRICE });
          break;
        case UPDATE_A_Z:
          hideSortFilter();
          dispatch({ value: productList, type: UPDATE_A_Z });
          break;
        case UPDATE_Z_A:
          hideSortFilter();
          dispatch({ value: productList, type: UPDATE_Z_A });
          break;
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-black-2 h-screen w-full z-50 flex justify-end transition-all duration-200 ${
        showFilterAndSort ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <aside
        className={`bg-white-1 h-screen max-w-510 overflow-y-auto transition-all duration-500 flex flex-col ${
          showFilterAndSort ? "w-full " : "w-0"
        }`}
      >
        <header className="relative flex justify-center border-b py-4 items-center">
          <h2 className="text-center font-semibold  text-lg">
            Filtrar e ordenar
          </h2>
          <button className="absolute right-6 text-xl" onClick={hideSortFilter}>
            <VscClose />
          </button>
        </header>

        <AccordionContent
          hideErrorMessage={hideErrorMessage}
          setFilter={setFilter}
          filter={filter}
          showAccordionOrder={showAccordionOrder}
          setShowAccordionOrder={setShowAccordionOrder}
          showAccordionByPriceRange={showAccordionByPriceRange}
          setShowAccordionByPriceRange={setShowAccordionByPriceRange}
          minimumValue={minimumValue}
          setMinimumValue={setMinimumValue}
          maximumValue={maximumValue}
          setMaximumValue={setMaximumValue}
        />

        <Footer
          cleanFilter={cleanFilter}
          filterProductList={filterProductList}
        />
      </aside>
    </div>
  );
}
