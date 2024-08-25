import { useEffect, useRef, useState } from "react";
import BigScreen from "./BigScreen";
import MediumScreen from "./MediumScreen";
import SmallScreen from "./SmallScreen";

export default function Banner() {
  const carosel = useRef(null);
  const mainScreen = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeSlide = () => {
    if (carosel.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = carosel.current;
      carosel.current.scrollLeft = scrollLeft + offsetWidth;

      if (carosel.current.scrollLeft >= scrollWidth - offsetWidth) {
        carosel.current.scrollLeft = 0;
      }
    }
  };

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

    const intervalId = setInterval(() => {
      changeSlide();
    }, 1000 * 4);

    // Limpeza de eventos
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, []);

  const screenSizeValidation = () => {
    if (windowWidth >= 1440) {
      return <BigScreen />;
    }

    if (windowWidth >= 768) {
      return <MediumScreen />;
    }

    return <SmallScreen />;
  };

  return (
    <section className="h-415 overflow-hidden" ref={mainScreen}>
      <div className="flex h-full scroll-smooth overflow-hidden" ref={carosel}>
        {screenSizeValidation()}
      </div>
    </section>
  );
}
