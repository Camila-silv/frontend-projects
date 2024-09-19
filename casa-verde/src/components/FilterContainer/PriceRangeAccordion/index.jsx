import { IoIosArrowUp } from "react-icons/io";
import CurrencyInput from "../../CurrencyInput";

export default function PriceRangeAccordion({
  setShowAccordionByPriceRange,
  showAccordionByPriceRange,
  minimumValue,
  receivesAndValidatesValue,
  maximumValue,
  hideErrorMessage
}) {
  return (
    <div>
      <button
        className="w-full text-start pl-4 pr-6 py-4 border-b flex justify-between items-center hover:bg-gray-2"
        onClick={() => setShowAccordionByPriceRange((toggle) => !toggle)}
      >
        <div className="flex flex-col">
          <span>Ordenar por Intervalo</span>
          <span className="text-xs">{}</span>
        </div>

        <IoIosArrowUp
          className={`text-lg transition-all duration-300 ${
            showAccordionByPriceRange && "rotate-180"
          }`}
        />
      </button>
      {showAccordionByPriceRange && (
        <div className="px-4 py-6 border-b flex justify-between flex-wrap gap-2">
          <>
            <div className="flex gap-4">
              {" "}
              <fieldset>
                <CurrencyInput
                  value={minimumValue}
                  setFunc={receivesAndValidatesValue}
                  id="minimum"
                  placeholder="Mínimo"
                />
              </fieldset>
              <fieldset>
                <CurrencyInput
                  value={maximumValue}
                  setFunc={receivesAndValidatesValue}
                  id="maximum"
                  placeholder="Máximo"
                />
              </fieldset>
            </div>
            <span
              className={`text-red-700 font-medium text-sm pl ${
                hideErrorMessage ? "hidden" : "block"
              }`}
            >
              O valor mínimo não pode ser maior que o valor máximo
            </span>
          </>
        </div>
      )}
    </div>
  );
}
