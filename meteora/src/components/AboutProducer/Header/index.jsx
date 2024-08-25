import { useContext } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MeteoraContext } from "../../../context/MeteoraContext";

export default function Header() {
  const { setShowModal, showModal } = useContext(MeteoraContext);
  return (
    <div className="flex items-center gap-3 bg-black-1 p-4 relative">
      <AiOutlineCheckCircle className="text-3xl text-green-1" />{" "}
      <h2 className="text-white-1">Confira detalhes sobre o produto</h2>
      <button
        className="absolute right-4 "
        onClick={() => setShowModal({ ...showModal, showAboutProducer: false })}
      >
        <IoCloseSharp className="text-gray-7 text-2xl cursor-pointer" />
      </button>
    </div>
  );
}
