import burger from "../../assets/images/burger.png";

export default function Cart({logo}) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-modal z-30 flex justify-end">
      <div className="bg-black-dark h-full flex flex-col gap-3 w-full max-w-md px-5 pt-20 pb-10 relative">
        <i class="fa-solid fa-xmark absolute right-10 top-5 text-white text-2xl cursor-pointer hover:scale-110 transition ease-in duration-300"></i>
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
          <div className="flex flex-col gap-3 justify-between  mobile:flex-row mobile:gap-0">
            <div className="flex items-center gap-3">
              <div className="bg-[#222222] rounded-[10px] p-3 h-12 w-12">
                <img
                  src={burger}
                  alt=""
                  title=""
                  height=""
                  width=""
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <div>
                <span className="block text-white font-inter text-base font-medium">
                  Texas Burger
                </span>
                <span className="block font-normal font-inter text-sm text-orange-normal">
                  R$ <span>42,90</span>
                </span>
              </div>
            </div>
            <div className="flex items-center bg-[#222222] rounded-lg py-2 px-4 gap-3 w-[100px]">
              <button className="text-white font-bold text-base">-</button>
              <input
                type="number"
                className="bg-transparent w-full outline-none no-spinner text-center font-inter text-white font-medium text-sm py-2 mobile:py-0"
                min="1"
                max="10"
                name="quantity"
                aria-label="Quantidade de lanche"
              />
              <button className="text-white font-bold text-base">+</button>
            </div>
          </div>
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
