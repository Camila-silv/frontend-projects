import { useContext } from "react";
import { MeteoraContext } from "../../../context/MeteoraContext";
import { Link, useNavigate } from "react-router-dom";



export default function Footer() {
  const { totalPurchaseValue, setShowModal, showModal } =
    useContext(MeteoraContext);
  const navigation = useNavigate();

  const validateNavigation = (e) => {
    e.preventDefault()
    setShowModal({ ...showModal, navigation: true });

    setTimeout(() => {
      navigation("/shopping-cart");
      setShowModal({ ...showModal, navigation: false,  showCart: false});
  
    }, 1000 * 3);
  };
  return (
    <footer className="border-t border-gray-8 mx-8">
      <div className="flex justify-between text-2xl text-green-1 font-medium mt-6">
        <span>Total:</span>
        <span>
          {totalPurchaseValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <Link
        className="bg-purple-1 text-white-1 text-base w-full inline-block px-4 py-1 mt-16"
        onClick={validateNavigation}
      >
        Finalizar compra
      </Link>
    </footer>
  );
}
