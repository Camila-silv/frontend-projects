import { useContext } from "react";
import { MeteoraContext } from "../../../context/MeteoraContext";
import { Link, useNavigate } from "react-router-dom";

export default function Summary() {
  const { totalPurchaseValue, cart, setShowModal, showModal } =
    useContext(MeteoraContext);

  const navigation = useNavigate();

  const validateNavigation = () => {
    setShowModal({ ...showModal, navigation: true });

    setTimeout(() => {
      navigation("/");
      setShowModal({ ...showModal, navigation: false });
    }, 1000 * 3);
  };

  return (
    <div className="lg:flex shrink-0 flex-col">
      <div className="bg-black-1 text-white-1 px-6 py-8 flex flex-col gap-8">
        <h2 className="text-28 font-medium ">Sumário</h2>

        <div className="border-b border-green-1 pb-6 flex flex-col gap-8">
          <div className="font-normal text-xl flex justify-between">
            <span>
              {cart.length === 1
                ? `${cart.length} Produto`
                : `${cart.length} Produtos`}
            </span>
            <span>
              {totalPurchaseValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <div className="font-normal text-xl flex justify-between">
            <span>Frete</span> <span>R$ 15,00</span>
          </div>
        </div>
        <div className="text-green-1 font-medium text-2xl flex justify-between">
          <span>Total:</span>
          <span>
            {(totalPurchaseValue + 15).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-6 md:px-0 md:flex-row md:justify-between ">
        <Link
          onClick={validateNavigation}
          className="w-full text-purple-1 text-center py-2 border-2 border-purple-1 font-medium text-base md:w-177"
        >
          Continuar compra
        </Link>
        <button className="w-full bg-purple-1 text-white-1 py-2 border-2 font-medium text-base md:w-177">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
