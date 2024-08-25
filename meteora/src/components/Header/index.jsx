import { useContext, useState } from "react";
import CartButton from "./CartButton";
import { MeteoraContext } from "../../context/MeteoraContext";
import { Link } from "react-router-dom";

export default function Header({ home = false }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { showModal, setShowModal } = useContext(MeteoraContext);

  return (
    <>
      <div className="bg-black-1">
        <header className="flex  h-58 items-center px-5 relative font-inter lg:w-1110 mx-auto lg:px-0">
          <div className="flex items-center gap-8 justify-between w-full md:w-auto md:mr-auto md:justify-normal">
            <a href="/">
              <img
                src="./src/assets/Mobile/Logo-mobile.png"
                alt="Logo Meteora"
              />
            </a>

            <nav>
              <div className="flex items-center gap-4 md:hidden">
                {home && (
                  <CartButton
                    styles="w-8 h-8"
                    handle={() =>
                      setShowModal({ ...showModal, showCart: true })
                    }
                  />
                )}

                <button
                  className="flex flex-col gap-1"
                  onClick={() => setOpenMenu((value) => !value)}
                >
                  <div className="w-5 h-0.5 bg-green-1"></div>
                  <div className="w-5 h-0.5 bg-green-1"></div>
                  <div className="w-5 h-0.5 bg-green-1"></div>
                </button>

                {openMenu && (
                  <div className="bg-gray-3 absolute top-0 right-0 flex flex-col w-36 p-5 flex gap-4">
                    <button
                      className="self-end relative min-h-6 min-w-6 flex items-center justify-center"
                      onClick={() => setOpenMenu((value) => !value)}
                    >
                      <div className="w-5 h-0.5 bg-green-1 rotate-45"></div>
                      <div className="w-5 h-0.5 bg-green-1 rotate-[-45deg] absolute top-[10.5px]"></div>
                    </button>
                    <ul className="text-gray-2">
                      <li className="my-1.5">
                        <Link
                          to="/"
                          className=" font-normal text-base"
                        >
                          Home
                        </Link>
                      </li>
                      <hr className="bg-gray-2 " />
                      <li className="my-1.5">
                        <a href="/" className=" font-normal text-base">
                          Nossas lojas
                        </a>
                      </li>
                      <hr className="bg-gray-2" />
                      <li className="my-1.5">
                        <a href="/" className="font-normal text-base">
                          Novidades
                        </a>
                      </li>
                      <hr className="bg-gray-2" />
                      <li className="my-1.5">
                        <a href="/" className="font-normal text-base">
                          Promoções
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <ul className="text-white-1  gap-3 hidden text-sm md:flex lg:text-base mr-2">
                <li className="flex items-center">
                  <Link to="/" className=" font-normal text-base">
                    Home
                  </Link>
                </li>
                <li className="flex items-center text-center">
                  <a href="/">Nossas lojas</a>
                </li>
                <li className="flex items-center">
                  <a href="/">Novidades</a>
                </li>
                <li className="flex items-center">
                  <a href="/">Promoções</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden justify-center gap-2 py-5 md:flex md:w-auto">
            <input
              type="text"
              placeholder="Digite o produto"
              className="border border-black-1 h-38 outline-none px-2 text-sm font-inter lg:text-base"
            />
            <button
              type="submit"
              className="border border-white-1 h-38 px-3 font-medium text-white-1 text-sm lg:text-base"
            >
              Buscar
            </button>
            {home && (
              <CartButton
                styles="w-10 h-10"
                handle={() => setShowModal({ ...showModal, showCart: true })}
              />
            )}
          </div>
        </header>
      </div>

      <div className="flex justify-center gap-2 py-5 md:hidden">
        <input
          type="text"
          placeholder="Digite o produto"
          className="border border-black-1 h-38 outline-none px-2 text-sm"
        />
        <button
          type="submit"
          className="border border-black-1 h-38 px-3 font-medium text-sm"
        >
          Buscar
        </button>
      </div>
    </>
  );
}
