import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export default function Menu({ logo }) {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen z-30  ${showMenu ? "" : "pointer-events-none"}`}>
     
      <div
        className={`absolute top-0 left-0 w-full h-full bg-modal transition-opacity duration-300 ${
          showMenu ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={() => setShowMenu(false)}
      />


      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-black-dark flex flex-col gap-10 px-5 pt-20 pb-10 transition-transform duration-300 ease-in-out 
          ${showMenu ? "translate-x-0" : "translate-x-full"}`}
      >
  
        <button className="cursor-pointer" onClick={() => setShowMenu(false)}>
          <i className="fa-solid fa-xmark absolute right-10 top-5 text-white text-2xl  hover:scale-110 transition ease-in duration-300"></i>
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

        <nav>
          <ul className="flex flex-col gap-5">
            <li className="text-lg font-inter font-normal text-white">
              <a
                href="#"
                className="hover:text-orange-normal ease-in duration-300"
              >
                Início
              </a>
            </li>
            <li className="text-lg font-inter font-normal text-white">
              <a
                href="#"
                className="hover:text-orange-normal ease-in duration-300"
              >
                Burgers
              </a>
            </li>
            <li className="text-lg font-inter font-normal text-white">
              <a
                href="#"
                className="hover:text-orange-normal ease-in duration-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="grow flex items-end">
          <a
            href="#"
            className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal w-full h-[50px] block flex justify-center items-center mx-auto rounded-[5px] laptop:mx-0  laptop:h-[60px]"
          >
            Fazer pedido
          </a>
        </div>
      </div>
    </div>
  );
}
