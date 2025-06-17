import logo from "./assets/images/logo.png";

export default function App() {
  return (
    <header className="bg-black-dark container px-5 mx-auto py-10">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo da B7Burger" title="Logo da B7Burger" height="34" width="182" />

        <div className="hidden">
          <nav>
            <ul>
              <li>
                <a href="" title="">
                  Início
                </a>
              </li>
              <li>
                <a href="" title="">
                  Burgers
                </a>
              </li>
              <li>
                <a href="" title="">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <button>Fazer pedido</button>
        </div>

        <button>
          <i class="fa-solid fa-bars text-white text-[32px]"></i>
        </button>
      </div>
    </header>
  );
}
