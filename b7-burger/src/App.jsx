import logo from "./assets/images/logo.png";
import hero from "./assets/images/hero.png";
import { Card } from "./components";

export default function App() {
  return (
    <>
      <header className="bg-black-dark container px-5 mx-auto py-10">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="Logo da B7Burger"
            title="Logo da B7Burger"
            height="34"
            width="182"
          />

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
      <main className="container mx-auto ">
        <div>
          <div className="bg-pattern-hero px-5">
            <div>
              <h2 className="text-[44px] text-white text-center font-calistoga leading-[50.4px] font-normal pt-20">
                O Hamburguer mais delicioso.😋
              </h2>

              <p className="font-inter text-[20px] leading-[26px] text-white font-normal text-center my-10">
                A primeira hamburgueria virtual que você faz o pedido online e
                come o burger através do computador.
              </p>

              <a
                href=""
                title="Fazer pedido"
                className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal w-100 max-w-[265px] h-[50px] block flex justify-center items-center mx-auto rounded-[5px] mb-10"
              >
                Fazer pedido
              </a>
            </div>

            <img
              src={hero}
              alt="Ilustração de um Burger"
              title="Ilustração de um Burger"
              loading="lazy"
              height="445"
              width="340"
            />

            <div>
              <p className="font-inter font-medium text-white text-[30px] text-center my-5">
                Pesquise o seu Hamburguer favorito!
              </p>
              <div className="flex flex-col gap-5 pb-8 items-center">
                <div className="flex gap-3 items-center bg-[#2B2B2B] w-full max-w-[344px] h-[67px] rounded-[5px] px-5">
                  <i class="fa-solid fa-magnifying-glass text-white text-[24px]"></i>
                  <input
                    type="text"
                    placeholder="Digite o nome do Burger"
                    className="bg-transparent outline-none text-white grow"
                  />
                </div>
                <div className="flex gap-3 items-center bg-[#2B2B2B] w-full max-w-[344px] h-[67px] rounded-[5px] px-5">
                  <select
                    name="category"
                    id="category"
                    className="bg-transparent outline-none text-white grow"
                  >
                    <option value="">Selecionar categoria</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-black-dark py-10 px-6 flex flex-col gap-6">
            <Card />
            <Card />
            <Card />
          </section>
        </div>
      </main>
      <footer className="bg-black-light px-6 py-16">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Logo da B7Burger"
            title="Logo da B7Burger"
            height="34"
            width="182"
            className="mb-4"
          />
          <p className="text-xl text-[#5F5F5F] font-normal text-center">powered by B7Web.</p>
        </div>
      </footer>
    </>
  );
}
