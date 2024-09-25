export default function SectionAboutTheSeries({ theme }) {
  return (
    <section className="relative pt-72 flex flex-col items-center w-full max-w-1200 mx-auto">
      <div
        className={` bg-auto bg-no-repeat bg-bottom absolute top-[2px] right-0  w-full h-full rotate-180 ${
          theme === "light" ? "bg-monster-light-theme" : "bg-kids-dark-theme"
        }`}
      ></div>
      <div className="flex items-center justify-between w-full">
        <div>
          <h2
            className={`text-5xl font-archivo-black uppercase text-red-normal mb-10 ${
              theme === "light" ? "font-archivo-black" : "font-rubik"
            }`}
          >
            o mundo <br /> invertido
          </h2>
          <p
            className={`font-libre text-base leading-5 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            O Mundo Invertido parece uma cópia do nosso mundo, mas com criaturas
            horrendas, <br />
            tempestades assustadoras, muita escuridão e entidades malignas. Um
            reino controlado <br />
            por Vecna, que tem planos de trazer tudo isso ao nosso mundo.
          </p>
        </div>
        <>
          <img
            src="../public/content/inverted-world.png"
            alt=""
            className={`${theme === "light" ? "rotate-0" : "rotate-180"}`}
          />
        </>
      </div>

      <div className="flex items-center justify-between flex-row-reverse w-full">
        <div>
          <h2
            className={`text-5xl font-archivo-black uppercase text-red-normal mb-10 text-end ${
              theme === "light" ? "font-archivo-black" : "font-rubik"
            }`}
          >
            stranger
            <br /> things vol. 4
          </h2>
          <p
            className={`font-libre text-base leading-5 text-end ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Mais experientes, os heróis de Stranger Things também precisam
            enfrentar <br />
            desafios maiores do que nunca e fazer decisões que vão mudar suas
            vidas
            <br /> para sempre. Confira ao lado o trailer da quarta temporada.
          </p>
        </div>
        <>
          <img src="../public/content/inverted-world.png" alt="" />
        </>
      </div>
    </section>
  );
}
