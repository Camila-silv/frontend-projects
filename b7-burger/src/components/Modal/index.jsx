import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContect";
import { addProductToCart, dealWithItemQuantity } from "../../utils";
import { CartContext } from "../../context/CartContext";

export default function Modal({
  handleSnackID,
  notifyPurchase,
  purchaseDeniedNotification,
}) {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [snack, setSnack] = useState({});
  const { cartList, setCartList } = useContext(CartContext);
  const [numberSnacks, setNumberSnacks] = useState(1);

  useEffect(() => {
    if (handleSnackID === null) return;

    async function getSnack(id) {
      const response = await fetch(`http://localhost:3000/snacks/${id}`);
      const surveyResponse = await response.json();
      setSnack(surveyResponse);
    }

    getSnack(handleSnackID);
  }, [handleSnackID]);

  const handleSnacksNumber = (operation) => {
    if (operation === "positive") {
      if (numberSnacks >= 10) return;
      setNumberSnacks((item) => item + 1);
    } else {
      if (numberSnacks <= 1) return;
      setNumberSnacks((item) => item - 1);
    }
  };

  const getSnack = () => {
    addProductToCart(
      snack,
      notifyPurchase,
      setCartList,
      cartList,
      purchaseDeniedNotification,
      numberSnacks
    );
    setNumberSnacks(1);
    setShowModal(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-modal z-30 flex justify-center items-center ease-in duration-300 p-10 ${
        showModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-black-dark h-full max-h-auto laptop:max-h-[500px] flex flex-col gap-3 w-full max-w-[800px] p-10 rounded-[24px] grid grid-cols-1 laptop:grid-cols-2 ease-linear duration-300 transition-transform overflow-scroll laptop:overflow-hidden ${
          showModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="flex items-center justify-center">
          <img
            src={snack.src}
            alt={`Ilustração ${snack.title}`}
            title={`Ilustração ${snack.title}`}
            loading="lazy"
            width="188"
            height="170"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-calistoga text-white text-5xl mt-5">
            {snack.title}
          </h2>
          <p className="font-inter text-white text-base my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            rem?
          </p>
          <span className="font-inter text-white uppercase text-sm mb-[5px] block">
            Preço
          </span>
          <div className="flex flex-col laptop:flex-row gap-6 laptop:items-center">
            <span className="font-inter text-white text-3xl">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(snack.value)}
            </span>

            <div className="flex items-center bg-[#222222] rounded-lg py-2 px-4 gap-3 w-[100px]">
              <button
                className="text-white font-bold text-base"
                onClick={() => handleSnacksNumber("negative")}
              >
                -
              </button>
              <input
                type="number"
                className="bg-transparent w-full outline-none no-spinner text-center font-inter text-white font-medium text-sm py-2 mobile:py-0"
                min="1"
                max="10"
                name="quantity"
                value={numberSnacks}
                readOnly
                aria-label="Quantidade de lanche"
              />
              <button
                className="text-white font-bold text-base"
                onClick={() => handleSnacksNumber("positive")}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col laptop:flex-row gap-3 mt-6 grow items-end">
            <button
              className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal border border-orange-normal w-full h-[50px] block flex justify-center items-center mx-auto rounded-[5px] laptop:mx-0  laptop:h-[60px] hover:border-white hover:bg-transparent ease-in duration-300"
              onClick={getSnack}
            >
              Comprar
            </button>
            <button
              className="text-[18px] font-inter text-white text-center font-semibold  w-full h-[50px] block flex justify-center items-center mx-auto  laptop:mx-0  laptop:h-[60px] hover:text-orange-normal ease-in duration-300"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
