import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function BtnCart() {
  const { showCart, setShowCart } = useContext(CartContext);
  return (
    <button
      className="transition ease-in duration-300 hover:scale-110"
      onClick={() => setShowCart(!showCart)}
    >
      <i className="fa-solid fa-cart-shopping text-white text-2xl cursor-pointer "></i>
    </button>
  );
}
