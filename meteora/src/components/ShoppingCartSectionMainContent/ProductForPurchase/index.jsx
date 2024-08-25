import { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import { MeteoraContext } from "../../../context/MeteoraContext";
import {
  CHANGE_QUANTIFY_PIECES,
  REMOVE_PRODUCT,
} from "../../../reducers/cartReducer";
import PropTypes from "prop-types";

export default function ProductForPurchase({ product }) {
  const { dispatch } = useContext(MeteoraContext);

  return (
    <li className="pb-8 pt-4 border-b border-gray-7 md:flex">
      <div className="mb-4 flex gap-4 md:w-319">
        <div className="h-165 shrink-0">
          <img src={product.src} alt={product.alt} className="h-full" />
        </div>
        <div className="md:w-165">
          <h3 className="font-bold text-base mb-4">{product.name}</h3>
          <p className="text-13 font-normal leading-5">{product.description}</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center   md:gap-8 md:grow">
        <span className="font-bold text-base text-green-1">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <fieldset className="flex flex-col">
          <label htmlFor="" className="font-bold text-13 text-center mb-4">
            Quantidade:
          </label>
          <div className="flex gap-2">
            <button
              className="font-normal text-base text-white-1 border rounded-full px-2"
              onClick={() =>
                dispatch({
                  type: CHANGE_QUANTIFY_PIECES,
                  value: product,
                  selector: "subtraction",
                })
              }
            >
              -
            </button>
            <input
              type="text"
              disabled
              className="border border-white-1 bg-transparent text-white-1 text-13 font-bold text-center rounded w-41"
              value={product.qtd}
            />
            <button
              className="font-normal text-base text-white-1 border rounded-full px-2"
              onClick={() =>
                dispatch({
                  type: CHANGE_QUANTIFY_PIECES,
                  value: product,
                  selector: "addition",
                })
              }
            >
              +
            </button>
          </div>
        </fieldset>
        <button
          className="text-white-1 right-0 top-8 text-xl"
          onClick={() => dispatch({ type: REMOVE_PRODUCT, value: product })}
        >
          <IoMdTrash className="text-white-1 " />
        </button>
      </div>
    </li>
  );
}

ProductForPurchase.propTypes = {
  product: PropTypes.object,
};
