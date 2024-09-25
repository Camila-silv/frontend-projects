export default function FormSection({theme}) {
    return (
        <section className="mt-36 relative">
          <h2
            className={`text-5xl font-archivo-black uppercase text-red-normal text-center z-10 relative ${
              theme === "light" ? "font-archivo-black" : "font-rubik"
            }`}
          >
            o clube Dungeons & <br /> Dragons
          </h2>

          <p
            className={`font-libre text-base leading-5 text-center mt-10 z-10 relative ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Para deter Vecna, os heróis de Stranger Things também precisam de
            você. <br />O Clube de D&D mais famoso de Hawkings está com vagas
            abertas para sua próxima aventura. Se você é destemido, gosta de{" "}
            <br />
            desafios e não tem medo de rodar o D20, chegou a hora de se
            inscrever para fazer parte da nova campanha.
          </p>

          <div className="mt-10 flex justify-center gap-16 items-center  pb-14 z-10 relative">
            <p
              className={`text-5xl font-archivo-black uppercase ${
                theme === "light"
                  ? "font-archivo-black text-black"
                  : "font-rubik text-white"
              }`}
            >
              entre para o <br />
              clube de d&d <br />e tenha <br />
              experiências <br />
              de
              <span className="text-red-normal pl-2">
                outro
                <br /> mundo
              </span>
              .
            </p>

            <form
              className={`bg-red-normal p-6 font-libre text-white w-full max-w-578 flex flex-col shadow-default z-10 relative ${
                theme === "light" ? "shadow-black" : "shadow-white"
              }`}
            >
              <fieldset className="flex flex-col gap-2 mb-4">
                <label htmlFor="">Nome Completo</label>
                <input
                  type="text"
                  className="bg-black border border-2 outline-none px-2 h-47"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2 mb-4">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  className="bg-black border border-2 outline-none px-2 h-47"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2 mb-4">
                <label htmlFor="">Level</label>
                <input
                  type="text"
                  className="bg-black border border-2 outline-none px-2 h-47"
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2 mb-6">
                <label htmlFor="">Personagem</label>
                <textarea className="bg-black border border-2 outline-none p-2 h-47 resize-none h-120 " />
              </fieldset>

              <button
                className={` font-archivo-black uppercase w-200 h-41 mx-auto ${
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white text-red-normal"
                }`}
              >
                Me inscrever
              </button>
            </form>
          </div>
        </section>
    )
}