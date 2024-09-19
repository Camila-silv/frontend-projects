import {
  UPDATE_A_Z,
  UPDATE_HIGHEST_PRICE,
  UPDATE_LOWEST_PRICE,
  UPDATE_Z_A,
} from "../../../reducers/FilterReducer";
import AccordionOrder from "../AccordionOrder";
import PriceRangeAccordion from "../PriceRangeAccordion";

export default function AccordionContent({
  hideErrorMessage,
  filter,
  setFilter,
  showAccordionOrder,
  setShowAccordionOrder,
  showAccordionByPriceRange,
  setShowAccordionByPriceRange,
  minimumValue,
  setMinimumValue,
  maximumValue,
  setMaximumValue,
}) {
  const activateFilter = (e) => {
    switch (e.target.id) {
      case UPDATE_LOWEST_PRICE:
        setFilter(UPDATE_LOWEST_PRICE);
        break;
      case UPDATE_HIGHEST_PRICE:
        setFilter(UPDATE_HIGHEST_PRICE);
        break;
      case UPDATE_A_Z:
        setFilter(UPDATE_A_Z);

        break;
      case UPDATE_Z_A:
        setFilter(UPDATE_Z_A);
        break;
    }
  };

  const receivesAndValidatesValue = (e) => {
    const componentID = e.target.id;

    if (componentID === "maximum") {
      setMaximumValue(e.target.value);
      return;
    }

    if (componentID === "minimum") {
      setMinimumValue(e.target.value);
      return;
    }
  };

  return (
    <main className="grow">
      <AccordionOrder
        setShowAccordionOrder={setShowAccordionOrder}
        filter={filter}
        showAccordionOrder={showAccordionOrder}
        activateFilter={activateFilter}
      />
      
      <PriceRangeAccordion
        setShowAccordionByPriceRange={setShowAccordionByPriceRange}
        showAccordionByPriceRange={showAccordionByPriceRange}
        minimumValue={minimumValue}
        receivesAndValidatesValue={receivesAndValidatesValue}
        maximumValue={maximumValue}
        hideErrorMessage={hideErrorMessage}
      />
    </main>
  );
}
