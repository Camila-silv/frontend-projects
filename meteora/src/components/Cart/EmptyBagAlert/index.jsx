import { useContext } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { MeteoraContext } from "../../../context/MeteoraContext";

export default function EmptyBagAlert() {
  const { showModal, setShowModal } = useContext(MeteoraContext);

  return (
    <div className="flex flex-col text-center text-white-1 items-center justify-center h-full p-10">
      <CgShoppingBag className="text-6xl mb-4" />
      <p className="font-bold text-2xl mb-4">Sua sacola está vazia!</p>

      <p className="text-sm">
        Que tal aproveitar e conferir algumas ofertas e produtos da Meteora?
      </p>

      <button
        className="bg-purple-1 w-full p-2 mt-4"
        onClick={() => setShowModal({ ...showModal, showCart: false })}
      >
        Continuar comprando
      </button>
    </div>
  );
}
