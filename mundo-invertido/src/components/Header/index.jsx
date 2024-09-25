export default function Header({ theme, setTheme }) {
  const switchTheme = (e) => {
    e.preventDefault();

    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <header
      className={`flex flex-col items-center relative pt-20 h-970  ${
        theme === "light" ? "bg-white" : "bg-red-950"
      }`}
    >
      <div className="absolute letf-0 top-0 bg-hero-pattern bg-no-repeat bg-cover opacity-30 saturate-0 w-full h-full z-0 bg-bottom"></div>
      <h1 className="z-10">
        <img
          src="../public/banner/logo.svg"
          alt=""
          className={`${theme === "light" ? "rotate-0" : "rotate-180"} `}
        />
      </h1>
      <p
        className={`text-center leading-5 text-base font-libre mt-6 mb-16 z-10 ${
          theme === "light" ? "text-black rotate-0" : "text-white rotate-180"
        }`}
      >
        Uma jornada para quem não tem medo do desconhecido. O caminho para o
        Mundo <br />
        invertido é incerto, repleto de obstáculos e perigos. Porém, a
        recompensa é grande: salvar <br />
        Hawkings e o mundo todo das garras de Vecna. Você está preparado? Então
        clique no botão
        <br /> abaixo para entrar no Mundo Invertido!
      </p>

      <button
        className={`border border-3 h-54 font-archivo-black text-xl font-normal  text-red-normal border-red-normal w-full max-w-284 uppercase z-20 ${
          theme === "light" ? "text-red-normal" : "text-white bg-red-normal"
        }`}
        onClick={switchTheme}
      >
        Inverter mundos
      </button>

      <div
        className={` bg-auto bg-no-repeat bg-bottom absolute top-0 right-0  w-full h-full ${
          theme === "light" ? "bg-kids-light-theme" : "bg-monster-dark-theme"
        }`}
      ></div>
    </header>
  );
}
