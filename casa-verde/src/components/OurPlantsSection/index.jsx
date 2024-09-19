import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { NewsletterContext } from "../../context/newsletterContext";

import { LoadingSection } from "../index";
import Button from "./Button";

export default function OurPlantsSection() {
  const { productList, state, hideErrorMessage, validRange } =
    useContext(NewsletterContext);

  const [content, setContent] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const updateContent = () => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      if (!state.length) {
        validRange ? setContent(productList) : setContent([]);
      }

      if (state.length) {
        setContent(state);
      }
    }, 1000 * 2);
  };

  useEffect(() => {
    updateContent();
  }, [state, productList]);

  const renderContent = () => {
    if (showLoading) {
      return <LoadingSection />;
    }

    if (content.length === 0) {
      return (
        <p className="mt-10">
          Produtos não encontrados dentro desse intervalo...
        </p>
      );
    }

    return content.map((item) => (
      <Product
        key={item.name}
        src={item.img}
        name={item.name}
        price={item.preco}
      />
    ));
  };

  return (
    <section className="pb-14 z-20 relative">
      <div className="flex justify-center items-center relative">
        <h2 className="text-center text-22 font-normal leading-65 mb-4">
          <span className="opacity-50">Conheça nossas</span> <br />
          <span className="font-elsie font-black text-82">plantas</span>
        </h2>

        <Button />
      </div>

      {!hideErrorMessage ? (
        <div className="mt-10 flex-col justify-center flex items-center gap-4">
          <img src="src/assets/error.gif" alt="" className="h-full w-auto" />
          <p>Erro ao buscar produtos, e ao carregar a seção...</p>
        </div>
      ) : (
        <ul className="flex justify-center gap-10 flex-wrap">
          {renderContent()}
        </ul>
      )}
    </section>
  );
}
