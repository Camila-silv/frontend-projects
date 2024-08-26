import largerImg from "../../../public/assets/banner carrinho de compras/Banner Carrinho.png";
import mediumImg from "../../../public/assets/banner carrinho de compras/Banner Carrinho 1.png";
import smallImg from "../../../public/assets/banner carrinho de compras/Banner Carrinho 2.png";
import { useEffect, useRef, useState } from "react";

export default function ShoppingCartBanner() {
  const mainScreen = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define o tamanho da tela na montagem inicial e quando o componente é redimensionado
    if (mainScreen.current) {
      setWindowWidth(mainScreen.current.offsetWidth);
    }

    // Atualiza o tamanho da tela quando a janela é redimensionada
    const handleResize = () => {
      if (mainScreen.current) {
        setWindowWidth(mainScreen.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Limpeza de evento
    return window.removeEventListener("resize", handleResize);
  }, []);

  const screenSizeValidation = () => {
    if (windowWidth >= 1440) {
      return (
        <img
          src={largerImg}
          className="w-screen flex-shrink-0 h-full"
          alt={"Imagem do banner, uma sacola vermelha"}
        />
      );
    }

    if (windowWidth >= 768) {
      return (
        <img
          src={mediumImg}
          className="w-screen flex-shrink-0 h-full"
          alt={"Imagem do banner, uma sacola vermelha"}
        />
      );
    }

    return (
      <img
        src={smallImg}
        className="w-screen flex-shrink-0 h-full"
        alt={"Imagem do banner, uma sacola vermelha"}
      />
    );
  };
  return (
    <section className="h-120 overflow-hidden" ref={mainScreen}>
      <div className="h-full w-full">{screenSizeValidation()}</div>
    </section>
  );
}
