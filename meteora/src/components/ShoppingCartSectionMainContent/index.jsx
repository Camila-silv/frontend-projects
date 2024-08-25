import ProductForPurchase from "./ProductForPurchase";
import { useContext, useEffect } from "react";
import { MeteoraContext } from "../../context/MeteoraContext";
import Summary from "./Summary";

export default function ShoppingCartSectionMainContent() {
  const { cart, setTotalPurchaseValue } =
    useContext(MeteoraContext);

  useEffect(() => {
    let initialValue = 0;
    cart.forEach((item) => {
      initialValue = item.price * item.qtd + initialValue;
    });

    setTotalPurchaseValue(initialValue);
  }, [cart]);

  return (
    <main className="lg:py-10 lg:px-165">
      <h1 className="hidden text-center text-32 my-8 medium md:block lg:mt-0">
        Carrinho de Compras
      </h1>
      <section className="flex flex-col gap-6 md:px-8 lg:flex-row">
        <div className="bg-black-1 text-white-1 px-6 pt-8 lg:grow">
          <header>
            <h2 className="text-28 font-medium pb-4">Detalhes da compra</h2>
          </header>
          <ul className="max-h-615 overflow-scroll hide-scrollbar">
            {cart.map((product) => {
              return <ProductForPurchase key={product.id} product={product} />;
            })}
          </ul>
        </div>

        <Summary />
      </section>
    </main>
  );
}
