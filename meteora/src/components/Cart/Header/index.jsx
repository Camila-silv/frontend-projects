import { useContext } from "react";
import { MeteoraContext } from "../../../context/MeteoraContext";

export default function Header() {
  const { showModal, setShowModal } = useContext(MeteoraContext);

  return (
    <header className="bg-purple-1 text-white-1 flex items-center h-14 relative px-8">
      <h2 className="text-xl font-medium">Carrinho de Compras</h2>
      <button
        className="text-xl absolute right-6 h-2.5"
        onClick={() => setShowModal({...showModal, showCart: false})}
      >
        <img src="../../../../assets/icon-close.png" alt="" className="h-full" />
      </button>
    </header>
  );
}
