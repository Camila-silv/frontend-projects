import { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import { MeteoraContext } from "../../../context/MeteoraContext";
import {
  CHANGE_QUANTIFY_PIECES,
  REMOVE_PRODUCT,
} from "../../../reducers/cartReducer";

export default function Product({ product }) {
  const { dispatch } = useContext(MeteoraContext);

  return (
    <div className="flex items-center gap-4 border-b border-gray-7 py-8 relative">
      <div className="h-148 w-109">
        <img src={product.src} alt={product.alt} className="h-full w-full" />
      </div>
      <div>
        <h3 className="font-bold text-base text-white-1 mb-4">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold text-13 text-white-1">Quantidade:</span>
          <fieldset className="flex items-center gap-2">
            <button
              className="font-normal text-base text-white-1 border rounded-full px-2"
              onClick={() =>
                dispatch({
                  type: CHANGE_QUANTIFY_PIECES,
                  value: product,
                  selector: "subtract",
                })
              }
              id="subtract"
            >
              -
            </button>
            <input
              type="text"
              disabled
              className="font-bold text-base text-white-1 border border-white-1 bg-transparent rounded w-41 text-center "
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
              id="addition"
            >
              +
            </button>
          </fieldset>
        </div>

        
        <span className="font-bold text-base text-green-1">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <button
        className="absolute text-white-1 right-0 top-8 text-xl"
        id={product.id}
        onClick={() => dispatch({ type: REMOVE_PRODUCT, value: product })}
      >
        <IoMdTrash />
      </button>
    </div>
  );
}
