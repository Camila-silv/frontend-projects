import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { MeteoraContext } from "../../../../context/MeteoraContext";
import { BUY_PRODUCT } from "../../../../reducers/cartReducer";

import { enableTransition } from "../../../../utils/enableTransition";


export default function ProductCard({
  name,
  description,
  price,
  src,
  alt,
  product,
}) {
  const {
    setProductChosenForViewing,
    cart,
    setTotalPurchaseValue,
    dispatch,
    setShowModal,
    showModal,
  } = useContext(MeteoraContext);

  const viewProduct = (e) => {
    e.preventDefault();

    setProductChosenForViewing(product);

    setShowModal({ ...showModal, showAboutProducer: true });
  };

  const buyProduct = (e) => {
    e.preventDefault();

    dispatch({ type: BUY_PRODUCT, value: { ...product, qtd: 1 } });

    let initialValue = 0;
    cart.forEach((item) => {
      initialValue = item.price * item.qtd + initialValue;
    });

    setTotalPurchaseValue(initialValue);

  

    enableTransition(cart, product, setShowModal, showModal)
  };

 

  return (
    <li className="w-323 h-615 border">
      <img src={src} alt={alt} className="h-402" />

      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-bold text-base ">{name}</h3>
        <p className="font-normal text-13 leading-5 line-clamp-2">
          {description}
        </p>
        <span className="font-bold text-base block ">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <div className="flex justify-between">
          <button
            className="bg-purple-1 text-white-1 w-fit px-4 h-37 flex justify-center items-center"
            onClick={buyProduct}
          >
            Adicionar ao carrinho
          </button>

          <button onClick={viewProduct}>
            <AiFillPlusCircle className="text-3xl text-purple-1 pointer-events-none" />
          </button>
        </div>
      </div>
    </li>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  product: PropTypes.object,
};


