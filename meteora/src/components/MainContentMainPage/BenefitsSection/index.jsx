export default function BenefitsSection() {
  return (
    <section className="bg-black-1 p-6 pb-12 font-inter">
      <h2 className="text-2xl font-medium text-center text-white-1 mb-10 leading-7">
        Conheça todas as nossas <br className="md:hidden" /> facilidades
      </h2>

      <ul className="flex flex-col gap-8 items-center lg:flex-row lg:justify-center">
        <li className="flex items-center gap-6 w-319">
          <div>
            <img src="./src/assets/Desktop/Ícones/x-diamond (2).png" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-green-1 font-bold text-base uppercase">
              Pague pelo pix
            </h3>
            <p className="text-white-1 leading-5 text-13">
              Ganhe 5% OFF em <br /> pagamentos via PIX
            </p>
          </div>
        </li>
        <li className="flex items-center gap-6 w-319">
          <div>
            <img
              src="./src/assets/Desktop/Ícones/arrow-repeat (2).png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-green-1 font-bold text-base uppercase">
              Troca grátis
            </h3>
            <p className="text-white-1 leading-5 text-13">
              Fique livre para trocar em até <br /> 30 dias.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-6 w-319">
          <div>
            <img src="./src/assets/Desktop/Ícones/flower1 (3).png" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-green-1 font-bold text-base uppercase">
              Sustentabilidade
            </h3>
            <p className="text-white-1 leading-5 text-13">
              Moda responsável, que respeita <br /> o meio ambiente.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
