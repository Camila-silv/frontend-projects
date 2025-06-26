export default function Header({ logo }) {
  return (
    <header className="bg-black-dark px-5  py-10 laptop:px-10">
      <div className="flex items-center justify-between container mx-auto laptop:gap-20 ">
        <a href="/" title="Início">
          <img
            src={logo}
            alt="Logo da B7Burger"
            title="Logo da B7Burger"
            height="34"
            width="182"
          />
        </a>

        <div className="hidden laptop:flex justify-between grow">
          <nav className="flex items-center">
            <ul className="flex gap-16">
              <li className="text-lg font-inter font-normal text-white">
                <a
                  href=""
                  title=""
                  className="hover:text-orange-normal ease-in duration-300"
                >
                  Início
                </a>
              </li>
              <li className="text-lg font-inter font-normal text-white">
                <a
                  href=""
                  title=""
                  className="hover:text-orange-normal ease-in duration-300"
                >
                  Burgers
                </a>
              </li>
              <li className="text-lg font-inter font-normal text-white">
                <a
                  href=""
                  title=""
                  className="hover:text-orange-normal ease-in duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <button className="text-lg font-inter font-semibold text-white border rounded-[5px] border-white w-[214px] h-[60px] flex justify-center items-center hover:bg-orange-normal hover:border-orange-normal ease-in duration-300">
            Fazer pedido
          </button>
        </div>

        <button className="laptop:hidden">
          <i class="fa-solid fa-bars text-white text-[32px]"></i>
        </button>
      </div>
    </header>
  );
}
