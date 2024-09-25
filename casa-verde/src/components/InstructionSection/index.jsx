import Plant from "../../assets/image 3.png"


export default function InstructionSection() {
  return (
    <section className="max-w-995 w-full flex mx-auto h-440 shadow-1 mb-16 md-second:flex-col md-second:h-auto md-second:max-w-530">
      <div className="">
        <img
          src={Plant}
          alt="Foto ilustrativa de uma planta"
          className="w-full h-full"
        />
      </div>
      <div className="w-2/4 bg-white-1 px-8 pt-16 md-second:w-full md-second:py-6">
        <h3 className="font-normal text-22 mb-6">
          <span className="opacity-50">Como conseguir</span> <br />
          <span className="font-elsie font-black text-42">minha planta</span>
        </h3>

        <ul className="font-normal flex flex-col gap-6">
          <li className="flex items-center gap-4 text-22 ">
            <span className="bg-yellow-1 h-52 w-52 inline-block rounded-full"></span>
            <span className="opacity-50 inline-block">
              Escolha suas plantas
            </span>
          </li>
          <li className="flex items-center gap-4 text-22 ">
            <span className="bg-yellow-1 h-52 w-52 inline-block rounded-full"></span>
            <span className="opacity-50 inline-block">Faça seu pedido</span>
          </li>
          <li className="flex items-center gap-4 text-22 ">
            <span className="bg-yellow-1 h-52 w-52 inline-block rounded-full"></span>
            <span className="opacity-50 inline-block">Aguarde na sua casa</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
