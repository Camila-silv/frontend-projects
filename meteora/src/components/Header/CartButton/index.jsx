import { useContext } from "react";
import { MeteoraContext } from "../../../context/MeteoraContext";

export default function CartButton({ styles, handle }) {
  const {cart} = useContext(MeteoraContext)
  return (
    <div className="flex items-center gap-2">
      <button className={styles} onClick={handle}>
        <img src="./src/assets/Cart.png" alt="" className="" />
      </button>
      <span className="text-green-1 font-normal text-base">
        {cart.length !== 0 ? cart.length : null}
      </span>
    </div>
  );
}
