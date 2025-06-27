import { useContext } from "react";
import burger from "../../assets/images/burger.png";
import { ModalContext } from "../../context/ModalContect";

export default function Card() {
  const {setShowModal} = useContext(ModalContext)
  return (
    <div className="w-full max-w-sm mx-auto" onClick={() => setShowModal(true)}>
      <div className="bg-card w-full rounded-lg flex flex-col items-center px-10 py-8">
        <img src={burger} alt="" title="" loading="lazy" width="" height="" />
        <div className="w-full mt-6">
          <span className="text-lg font-medium text-white font-inter">
            Tradicional
          </span>
          <h2 className="font-calistoga text-[32px] text-white font-normal">
            Texas Burger
          </h2>
          <span className="font-inter text-[32px] font-medium text-orange-normal">
            R$ 25,50
          </span>
        </div>
      </div>
    </div>
  );
}
