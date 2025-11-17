import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { dealWithItemQuantity } from "../../../utils";

export default function Card({ product }) {
  const { cartList, setCartList } = useContext(CartContext);

 

  return (
    <div className="flex flex-col gap-3 justify-between  mobile:flex-row mobile:gap-0">
      <div className="flex items-center gap-3">
        <div className="bg-[#222222] rounded-[10px] p-3 h-12 w-12">
          <img
            src={product.src}
            alt={`Ilustração ${product.title}`}
            product={`Ilustração ${product.title}`}
            height=""
            width=""
            loading="lazy"
            className="h-full w-full"
          />
        </div>
        <div>
          <span className="block text-white font-inter text-base font-medium">
            {product.title}
          </span>
          <span className="block font-normal font-inter text-sm text-orange-normal">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.value)}
          </span>
        </div>
      </div>
      <div className="flex items-center bg-[#222222] rounded-lg py-2 px-4 gap-3 w-[100px]">
        <button
          className="text-white font-bold text-base"
          onClick={() => dealWithItemQuantity("negative", cartList, setCartList, product)}
        >
          -
        </button>
        <input
          type="number"
          className="bg-transparent w-full outline-none no-spinner text-center font-inter text-white font-medium text-sm py-2 mobile:py-0"
          min="1"
          max="10"
          name="quantity"
          value={product.qtr}
          readOnly
          aria-label="Quantidade de lanche"
        />
        <button
          className="text-white font-bold text-base"
          onClick={() => dealWithItemQuantity("positive", cartList, setCartList, product)}
        >
          +
        </button>
      </div>
    </div>
  );
}
