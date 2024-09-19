import { IoIosArrowUp } from "react-icons/io";
import {
  UPDATE_A_Z,
  UPDATE_HIGHEST_PRICE,
  UPDATE_LOWEST_PRICE,
  UPDATE_Z_A,
} from "../../../reducers/FilterReducer";

export default function AccordionOrder({
  setShowAccordionOrder,
  filter,
  showAccordionOrder,
  activateFilter,
}) {
  const filterName = () => {
    switch (filter) {
      case UPDATE_LOWEST_PRICE:
        return "Menor preço";
      case UPDATE_HIGHEST_PRICE:
        return "Maior preço";
      case UPDATE_A_Z:
        return "A - Z";
      case UPDATE_Z_A:
        return "Z - A";
    }
  };

  return (
    <div>
      <button
        className="w-full text-start pl-4 pr-6 py-4 border-b flex justify-between items-center hover:bg-gray-2"
        onClick={() => setShowAccordionOrder((toggle) => !toggle)}
      >
        <div className="flex flex-col">
          <span>Ordenar</span>
          <span className="text-xs">{filterName()}</span>
        </div>

        <IoIosArrowUp
          className={`text-lg transition-all duration-300 ${
            showAccordionOrder && "rotate-180"
          }`}
        />
      </button>
      {showAccordionOrder && (
        <div className="px-4 py-6 border-b flex justify-between flex-wrap gap-6">
          <fieldset>
            <label
              htmlFor="lowest-price"
              id="UPDATE_LOWEST_PRICE"
              className={` ${
                filter === "UPDATE_LOWEST_PRICE"
                  ? "border px-4 py-2 rounded-full cursor-pointer bg-red-700 text-white-1 border-red-700"
                  : "border px-4 py-2 rounded-full bg-white-2 border-gray-2 hover:bg-gray-2 cursor-pointer"
              }`}
              onClick={activateFilter}
            >
              <input type="radio" name="filter" className="hidden" />
              <span className="pointer-events-none"> Menor preço</span>
            </label>
          </fieldset>

          <fieldset>
            <label
              htmlFor="higher-price"
              id="UPDATE_HIGHEST_PRICE"
              className={` ${
                filter === UPDATE_HIGHEST_PRICE
                  ? "border px-4 py-2 rounded-full cursor-pointer bg-red-700 text-white-1 border-red-700"
                  : "border px-4 py-2 rounded-full bg-white-2 border-gray-2 hover:bg-gray-2 cursor-pointer"
              }`}
              onClick={activateFilter}
            >
              <input type="radio" name="filter" className="hidden" />
              <span className="pointer-events-none">Maior preço</span>
            </label>
          </fieldset>

          <fieldset>
            <label
              id="UPDATE_A_Z"
              htmlFor="a-z"
              className={` ${
                filter === UPDATE_A_Z
                  ? "border px-4 py-2 rounded-full cursor-pointer bg-red-700 text-white-1 border-red-700"
                  : "border px-4 py-2 rounded-full bg-white-2 border-gray-2 hover:bg-gray-2 cursor-pointer"
              }`}
              onClick={activateFilter}
            >
              <input type="radio" name="filter" className="hidden" />
              <span className="pointer-events-none">A - Z</span>
            </label>
          </fieldset>

          <fieldset>
            <label
              htmlFor="z-a"
              id="UPDATE_Z_A"
              className={` ${
                filter === UPDATE_Z_A
                  ? "border px-4 py-2 rounded-full cursor-pointer bg-red-700 text-white-1 border-red-700"
                  : "border px-4 py-2 rounded-full bg-white-2 border-gray-2 hover:bg-gray-2 cursor-pointer"
              }`}
              onClick={activateFilter}
            >
              <input type="radio" name="filter" className="hidden" />
              <span className="pointer-events-none">Z - A</span>
            </label>
          </fieldset>
        </div>
      )}
    </div>
  );
}
