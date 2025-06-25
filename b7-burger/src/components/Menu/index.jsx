export default function Menu({ logo }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-modal z-30 flex justify-end">
      <div className="bg-black-dark h-full flex flex-col gap-10 w-full max-w-md px-5 pt-20 pb-10 relative">
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
        <nav>
          <ul className="flex flex-col gap-5">
            <li className="text-lg font-inter font-normal text-white">
              <a
                href=""
                title="Início"
                className="hover:text-orange-normal ease-in duration-300"
              >
                Início
              </a>
            </li>
            <li className="text-lg font-inter font-normal text-white">
              <a
                href=""
                title="Burgers"
                className="hover:text-orange-normal ease-in duration-300"
              >
                Burgers
              </a>
            </li>
            <li className="text-lg font-inter font-normal text-white">
              <a
                href=""
                title="Contato"
                className="hover:text-orange-normal ease-in duration-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="grow flex items-end">
          <a
            href=""
            title="Fazer pedido"
            className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal w-full h-[50px] block flex justify-center items-center mx-auto rounded-[5px] laptop:mx-0  laptop:h-[60px] "
          >
            Fazer pedido
          </a>
        </div>
      </div>
    </div>
  );
}
