import hero from "../../assets/images/hero.png";

export default function Banner() {
  return (
    <div className="laptop:flex  laptop:justify-center">
      <div className="laptop:flex flex-col items-start">
        <h2 className="text-[44px] text-white text-center font-calistoga leading-[50.4px] font-normal laptop:text-start laptop:text-7xl">
          O Hamburguer
          <br className="hidden laptop:block" /> mais delicioso.😋
        </h2>

        <p className="font-inter text-[20px] leading-[26px] text-white font-normal text-center my-10 laptop:text-start">
          A primeira hamburgueria virtual que você faz o{" "}
          <br className="hidden laptop:block" />
          pedido online e come o burger através do{" "}
          <br className="hidden laptop:block" />
          computador.
        </p>

        <a
          href=""
          title="Fazer pedido"
          className="text-[18px] font-inter text-white text-center font-semibold bg-orange-normal w-[265px] h-[50px] block flex justify-center items-center mx-auto rounded-[5px] mb-10 laptop:mx-0  laptop:h-[60px] laptop:w-[280px]"
        >
          Fazer pedido
        </a>
      </div>

      <img
        src={hero}
        alt="Ilustração de um Burger"
        title="Ilustração de um Burger"
        loading="lazy"
        height="445"
        width="340"
        className="mx-auto laptop:h-[678px] laptop:w-auto "
      />
    </div>
  );
}
