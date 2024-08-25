import { useContext, useEffect, useState } from "react";
import { MeteoraContext } from "../../context/MeteoraContext";
import Product from "./Product";
import ListProductsSelectedPurchase from "./ListProductsSelectedPurchase";
import Footer from "./Footer";
import Header from "./Header";
import EmptyBagAlert from "./EmptyBagAlert";

export default function Cart() {
  const { cart, setTotalPurchaseValue, showModal } = useContext(MeteoraContext);
  const [toggleAside, setToggleAside] = useState(false);

  useEffect(() => {
    setToggleAside(showModal.showCart);
  }, [showModal.showCart]);

  useEffect(() => {
    let initialValue = 0;
    cart.forEach((item) => {
      initialValue = item.price * item.qtd + initialValue;
    });

    setTotalPurchaseValue(initialValue);
  }, [cart]);

  return (
    <div
      className={` top-0 left-0 w-screen h-screen bg-gray-4 z-50 ${
        showModal.showCart ? "fixed" : "hidden"
      }`}
    >
      <aside
        className={`bg-gray-3 h-screen overflow-hidden absolute right-0 font-inter transition-all duration-1000 ease-in-out delay-200 ${
          toggleAside ? "w-full max-w-450" : "w-0"
        }`}
      >
        <div className="min-w-380 h-full">
          <Header />

          {cart.length === 0 ? (
            <EmptyBagAlert />
          ) : (
            <>
              <ListProductsSelectedPurchase>
                {cart.map((item) => {
                  return <Product key={item.id} product={item} />;
                })}
              </ListProductsSelectedPurchase>
              <Footer />
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
