import { useContext } from "react";

import { MeteoraContext } from "../../context/MeteoraContext";
import Header from "./Header";
import Form from "./Form";

export default function AboutProducer() {
  const { productChosenForViewing, showModal } =
    useContext(MeteoraContext);

  
  return (
    <div
      className={`top-0 left-0 w-screen h-screen bg-gray-4 z-40  flex items-center justify-center px-4 ${
        showModal.showAboutProducer ? "fixed" : "hidden"
      }`}
    >
      <section className=" bg-white-1 max-w-380  rounded-b  drop-shadow-lg md:max-w-700">
        <Header />

        <div className="bg-white-1 p-4 pb-6 overflow-y-scroll h-522 md:flex md:gap-6 md:overflow-hidden">
          <div className="w-full bg-black-1 h-422 overflow-hidden ">
            <img
              src={productChosenForViewing.src}
              alt={productChosenForViewing.alt}
              className="w-full h-full"
            />
          </div>
          <Form />
        </div>
      </section>
    </div>
  );
}
