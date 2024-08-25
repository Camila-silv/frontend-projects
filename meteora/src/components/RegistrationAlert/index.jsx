import { useContext } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { MeteoraContext } from "../../context/MeteoraContext";

export default function RegistrationAlert() {
  const { showModal, setShowModal } =
    useContext(MeteoraContext);

  return (
    <div
      className={`top-0 left-0 w-screen h-screen bg-gray-4 z-50  flex items-center justify-center px-4 ${
        showModal.showRegistrationAlert ? "fixed" : "hidden"
      }`}
    >
      <section className=" bg-white-1  rounded-b  drop-shadow-lg w-full max-w-700">
        <div className="flex items-center gap-3 bg-black-1 p-4 relative">
          <AiOutlineCheckCircle className="text-3xl text-green-1" />{" "}
          <h2 className="text-white-1">E-mail cadastrado com sucesso!</h2>
          <button className="absolute right-4 ">
            <IoCloseSharp
              className="text-gray-7 text-2xl cursor-pointer"
              onClick={() => setShowModal({...showModal, showRegistrationAlert: false})}
            />
          </button>
        </div>

        <div className="bg-white-1 p-4 pb-6">
          <p>Em breve você receberá novidades exclusivas da Meteora.</p>
        </div>
      </section>
    </div>
  );
}
