import burger from "../../assets/images/burger.png";

export default function Modal() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-modal z-30 flex justify-center items-center">
      <div className="bg-black-dark h-full max-h-[500px] flex flex-col gap-3 w-full max-w-[800px] p-10 rounded-[24px] grid grid-cols-1 laptop:grid-cols-2">
        <div className="flex items-center justify-center">
          <img src={burger} alt="" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-calistoga text-white text-5xl mt-5">
            Texas Burger
          </h2>
          <p className="font-inter text-white text-base my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            rem?
          </p>
          <span className="font-inter text-white uppercase text-sm mb-[5px] block">
            Preço
          </span>
          <div className="flex gap-6 items-center">
            <span className="font-inter text-white text-3xl">R$ 42,90</span>

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

          <div className="flex gap-3 mt-6 grow items-end">
            <a
              href="/"
              title="Finalizar Compra"
              className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal border border-orange-normal w-full h-[50px] block flex justify-center items-center mx-auto rounded-[5px] laptop:mx-0  laptop:h-[60px] hover:border-white hover:bg-transparent ease-in duration-300"
            >
              Finalizar Compra
            </a>
            <a
              href="/"
              title="Cancelar"
              className="text-[18px] font-inter text-white text-center font-semibold  w-full h-[50px] block flex justify-center items-center mx-auto  laptop:mx-0  laptop:h-[60px] hover:text-orange-normal ease-in duration-300"
            >
              Cancelar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
