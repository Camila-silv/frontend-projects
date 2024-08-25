import { useContext } from "react";
import {
  Header,
  ShoppingCartBanner,
  ShoppingCartSectionMainContent,
} from "../components";
import { MeteoraContext } from "../context/MeteoraContext";

export default function ShoppingCart() {
  const {showModal} = useContext(MeteoraContext)
  return (
    <>
      <Header />
      <ShoppingCartBanner />
      <ShoppingCartSectionMainContent />

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
