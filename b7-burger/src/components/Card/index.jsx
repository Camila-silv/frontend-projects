import { useContext } from "react";
import { ModalContext } from "../../context/ModalContect";

export default function Card({ product, handleSnackID }) {
  const { setShowModal } = useContext(ModalContext);

  const handleModal = () => {
    setShowModal(true);
    handleSnackID(product.id);
  };

  return (
    <div
      className="w-full max-w-sm mx-auto cursor-pointer transition ease-in duration-300 hover:translate-y-[-10px]"
      onClick={() => handleModal()}
    >
      <div className="bg-card w-full rounded-lg flex flex-col items-center px-10 py-8">
        <img
          src={product.src}
          alt={`Ilustração ${product.title}`}
          title={`Ilustração ${product.title}`}
          loading="lazy"
          width="188"
          height="170"
          className="object-cover w-[188px] h-[170px]"
        />
        <div className="w-full mt-6">
          <span className="text-lg font-medium text-white font-inter">
            {product.label}
          </span>
          <h2 className="font-calistoga text-[32px] text-white font-normal">
            {product.title}
          </h2>
          <span className="font-inter text-[32px] font-medium text-orange-normal">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.value)}
          </span>
        </div>
      </div>
    </div>
  );
}
