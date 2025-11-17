import logo from "./assets/images/logo.png";

import {
  Card,
  Footer,
  Header,
  SectionBurgerSearch,
  Banner,
  Menu,
  Cart,
  Modal,
} from "./components";
import { CartProvider } from "./context/CartContext";
import { MenuProvider } from "./context/MenuContext";
import { ModalProvider } from "./context/ModalContect";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const [productList, setProductList] = useState([]);

  const [snackID, setSnackID] = useState(null);
  const notifyPurchase = () =>
    toast.success("Adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const purchaseDeniedNotification = () =>
    toast.error("Item já existe no carrinho!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  if (productList.length === 0) {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/snacks");
      const snacks = await response.json();

      setProductList(snacks);
    }

    getProducts();
  }

  return (
    <MenuProvider>
      <ModalProvider>
        <CartProvider>
          <Header logo={logo} />

          <main>
            <div>
              <Banner />
              <SectionBurgerSearch />

              <section className="bg-black-dark py-10 px-5 laptop:px-10">
                <div className="container mx-auto grid grid-cols-1 gap-6 laptop:grid-cols-2 desktop:grid-cols-3">
                  {productList.map((product) => (
                    <Card
                      handleSnackID={setSnackID}
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              </section>
            </div>
          </main>

          <Footer logo={logo} />

          <Modal
            handleSnackID={snackID}
            notifyPurchase={notifyPurchase}
            purchaseDeniedNotification={purchaseDeniedNotification}
          />

          <Menu logo={logo} />

          <Cart logo={logo} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            limit={5}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </CartProvider>
      </ModalProvider>
    </MenuProvider>
  );
}
