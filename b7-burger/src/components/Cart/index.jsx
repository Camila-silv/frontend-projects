import { useContext } from "react";
import Card from "./Card";
import { CartContext } from "../../context/CartContext";

export default function Cart({ logo }) {
  const { showCart, setShowCart, cartList } = useContext(CartContext);
 

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-modal z-30 flex justify-end transition-all ease-in duration-300 ${
        showCart
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-black-dark h-full flex flex-col gap-3 w-full max-w-md px-5 pt-20 pb-10 relative transition-all ease-in duration-300 ${
          showCart ? "translate-x-0" : "translate-x-36"
        }`}
      >
        <button onClick={() => setShowCart(!showCart)}>
          <i className="fa-solid fa-xmark absolute right-10 top-5 text-white text-2xl cursor-pointer hover:scale-110 transition ease-in duration-300"></i>
        </button>
        <a href="/" title="Início">
          <img
            src={logo}
            alt="Logo da B7Burger"
            title="Logo da B7Burger"
            height="34"
            width="182"
          />
        </a>

        <h2 className="text-[28px] font-bold font-inter text-white">
          Carrinho
        </h2>

        <div className="mt-6 flex flex-col gap-4 h-full max-h-60 overflow-scroll pe-5">
          {cartList.map((product) => (
            <Card            
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="grow flex flex-col justify-end gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h4 className="text-white text-sm font-normal font-inter">
                  Sub-total:
                </h4>
                <span className="text-white text-sm font-normal font-inter">
                  R$ <span>42,90</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-white text-sm font-normal font-inter">
                  Frete:
                </h4>
                <span className="text-white text-sm font-normal font-inter">
                  R$ <span>10,00</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-orange-normal text-base font-bold font-inter">
                Total:
              </h4>
              <span className="text-orange-normal text-base font-bold font-inter">
                R$ <span>52,90</span>
              </span>
            </div>
          </div>
          <a
            href="/"
            title="Finalizar Compra"
            className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal w-full h-[50px] block flex justify-center items-center mx-auto rounded-[5px] laptop:mx-0  laptop:h-[60px] "
          >
            Finalizar Compra
          </a>
        </div>
      </div>
    </div>
  );
}
