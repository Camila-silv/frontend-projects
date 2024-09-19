import { FaArrowRightLong } from "react-icons/fa6";

export default function Product({src, name, price}) {
  return (
    <li className="flex h-200 w-full max-w-379 shadow-1 bg-white-1">
      <div >
        <img src={src} alt="Imagem da planta" className="h-full" />
      </div>

      <div className="font-montSerrat flex flex-col py-6 flex grow">
        <h3 className="font-elsie font-black text-32 leading-8 mb-3">
          {name}
        </h3>
        <span className="text-base text-black-2 font-normal mb-4">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <a
          href="/"
          className="text-base text-yellow-1 font-normal flex items-center gap-4 cursor-pointer"
        >
          Comprar <FaArrowRightLong />
        </a>
      </div>
    </li>
  );
}
