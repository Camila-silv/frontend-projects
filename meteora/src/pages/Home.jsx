import { useContext } from "react";
import {
  Header,
  Banner,
  MainContentMainPage,
  Cart,
  AboutProducer,
  RegistrationAlert,
  Alert,
} from "../components";
import { MeteoraContext } from "../context/MeteoraContext";

export default function Home() {
  const { showModal } = useContext(MeteoraContext);
  return (
    <>
      <Header home={true} />
      <Banner />
      <MainContentMainPage />
      <footer className="bg-black-1 py-4 font-inter">
        <p className="text-white-1 text-center text-13 font-normal leading-5">
          2024 © Desenvolvido por Camila | <br className="md:hidden" /> Projeto
          fictício sem fins comerciais.
        </p>
      </footer>

      <Alert
        alert={showModal.alertPurchasedItem}
        text="Item adicionado ao carrinho!!"
        bgColor="bg-green-1"
      />

      <Alert
        alert={showModal.itemAlreadyPurchased}
        text="Item já adquirido!!"
        bgColor="bg-red-700"
      />

      <Cart />
      <AboutProducer />
      <RegistrationAlert />

      <div
        className={`top-0 left-0 w-screen h-screen bg-gray-4 z-50  flex items-center justify-center px-4 ${
          showModal.navigation ? "fixed" : "hidden"
        }`}
      >
        <iframe
          src="https://giphy.com/embed/6BupX2xF6gwk6bCX1q"
          width="453"
          height="480"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
