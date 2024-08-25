import { useContext } from "react";
import { MeteoraContext } from "../../../context/MeteoraContext";
import { BUY_PRODUCT } from "../../../reducers/cartReducer";
import { enableTransition } from "../../../utils/enableTransition";

export default function Form() {
  const { productChosenForViewing, cart, dispatch, setShowModal, showModal } =
    useContext(MeteoraContext);

  const buyProduct = (e) => {
    e.preventDefault();

    dispatch({
      type: BUY_PRODUCT,
      value: { ...productChosenForViewing, qtd: 1 },
    });

    enableTransition(cart, productChosenForViewing, setShowModal, showModal);
  };
  return (
    <form className="border px-3 pt-4 md:border-0" onSubmit={buyProduct}>
      <div className=" mb-4 border-b pb-4 border-black-1">
        <h3 className="text-base font-bold mb-4">
          {productChosenForViewing.name}
        </h3>
        <p className="tex-13 font-normal text-black-2 line-clamp-2">
          {productChosenForViewing.description}
        </p>
      </div>

      <div className="my-4 border-b pb-4 border-gray-6">
        <span className="text-black-2 text-xl font-medium ">
          {productChosenForViewing.price !== undefined
            ? productChosenForViewing.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : null}
        </span>
        <p className="text-13 text-gray-5 font-normal mt-4">
          Vendido e entregue por Riachuelo
        </p>
      </div>

      <div className="my-4 border-b pb-4 border-gray-6">
        <span className="text-13 font-bold mb-4 inline-block">Cores:</span>

        <fieldset className="flex gap-4">
          <div className="flex flex-col gap-2">
            <input type="radio" name="color" value="azul-claro" required />
            <label htmlFor="" className="text-13 font-normal">
              Azul claro
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <input type="radio" name="color" value="offwhite" />
            <label htmlFor="" className="text-13 font-normal">
              Offwhite
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <input type="radio" name="color" value="preto" />
            <label htmlFor="" className="text-13 font-normal">
              Preto
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mb-4">
        <span className="text-13 font-bold mb-4 inline-block">Tamanho:</span>

        <fieldset className="flex gap-4">
          <div className="flex flex-col gap-2">
            <input type="radio" name="tamanho" value="p" required />
            <label htmlFor="" className="text-13 font-normal uppercase">
              p
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <input type="radio" name="tamanho" value="pp" />
            <label htmlFor="" className="text-13 font-normal uppercase">
              pp
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <input type="radio" name="tamanho" value="m" />
            <label htmlFor="" className="text-13 font-normal uppercase">
              m
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <input type="radio" name="tamanho" value="g" />
            <label htmlFor="" className="text-13 font-normal uppercase">
              g
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <input type="radio" name="tamanho" value="gg" />
            <label htmlFor="" className="text-13 font-normal uppercase">
              gg
            </label>
          </div>
        </fieldset>
      </div>

      <button className="bg-purple-1 text-white-1 font-medium text-base text-center px-4 py-2 md:px-6">
        Adicionar à sacola
      </button>
    </form>
  );
}
