import logo from "./assets/images/logo.png";
import hero from "./assets/images/hero.png";
import { Card, Footer, Header } from "./components";

export default function App() {
  return (
    <>
      <Header logo={logo} />

      <main>
        <div>
          <div className="bg-pattern-hero px-5 laptop:px-10 pt-16 laptop:bg-desktop-pattern-hero ">
            <div className="container mx-auto pb-10 laptop:pt-6 laptop:pb-16">
              <div className="laptop:flex  laptop:justify-center">
                <div className="laptop:flex flex-col items-start">
                  <h2 className="text-[44px] text-white text-center font-calistoga leading-[50.4px] font-normal laptop:text-start laptop:text-7xl">
                    O Hamburguer<br className="hidden laptop:block"/> mais delicioso.😋
                  </h2>

                  <p className="font-inter text-[20px] leading-[26px] text-white font-normal text-center my-10 laptop:text-start">
                    A primeira hamburgueria virtual que você faz o <br className="hidden laptop:block"/>pedido online
                    e come o burger através do <br className="hidden laptop:block"/>computador.
                  </p>

                  <a
                    href=""
                    title="Fazer pedido"
                    className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal w-[265px] h-[50px] block flex justify-center items-center mx-auto rounded-[5px] mb-10 laptop:mx-0  laptop:h-[60px] laptop:w-[280px]"
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
                  className="mx-auto laptop:h-[678px] laptop:w-auto "
                />
              </div>

              <div>
                <p className="font-inter font-medium text-white text-[30px] text-center my-5 laptop:text-start laptop:text-[32px]">
                  Pesquise o seu <br className="hidden laptop:block"/>Hamburguer favorito!
                </p>
                <div className="flex flex-col gap-5 items-center laptop:flex-row laptop:justify-between">
                  <div className="flex gap-3 items-center bg-[#2B2B2B] w-full  h-[67px] rounded-[5px] px-5 laptop:h-[80px]">
                    <i class="fa-solid fa-magnifying-glass text-white text-[24px]"></i>
                    <input
                      type="text"
                      placeholder="Digite o nome do Burger"
                      className="bg-transparent outline-none text-white grow"
                    />
                  </div>
                  <div className="flex gap-3 items-center bg-[#2B2B2B] w-full  h-[67px] rounded-[5px] px-5 laptop:h-[80px]">
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
          </div>

          <section className="bg-black-dark py-10 px-5 laptop:px-10">
            <div className="container mx-auto grid grid-cols-1 gap-6 laptop:grid-cols-3">
              <Card />
              <Card />
              <Card />
               <Card />
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </main>

      <Footer logo={logo} />
    </>
  );
}
