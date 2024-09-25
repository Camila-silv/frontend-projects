export default function Footer({ theme }) {
  return (
    <footer
      className={`font-libre flex flex-col items-center gap-4 h-218 justify-center relative px-10 ${
        theme === "light" ? "bg-gray-normal " : "bg-black"
      }`}
    >
      <div
        className={` bg-no-repeat bg-contain absolute   h-278 w-420  ${
          theme === "light"
            ? "bg-tape-light-theme top-[80px] left-[-60px] rotate-[-22deg]"
            : "bg-tape-dark-theme top-[20px] left-[-40px] rotate-[-32deg]"
        }`}
      ></div>
      <p
        className={`relative z-10 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Projeto construído para fins didáticos, com o objetivo de colocar em
        prática <br /> os conhecimentos de HTML, CSS e JavaScript aprendidos na
        DIO._
      </p>
      <img
        src="../public/footer/logo.svg"
        alt="Logo da DIO"
        className="relative z-10"
      />

      <div
        className={` bg-no-repeat bg-contain absolute top-[80px] right-[-30px] h-278 w-420 rotate-[22deg] ${
          theme === "light" ? "bg-tape-light-theme" : "bg-tape-dark-theme"
        }`}
      ></div>
    </footer>
  );
}
