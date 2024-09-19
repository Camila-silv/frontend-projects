import Form from "./Form";

export default function SubscriptionNewsletter() {
  return (
    <section className="flex max-w-1200 w-full mx-auto z-20 relative overflow-hidden ">
      <div className="mt-20  z-30">
        <h2 className="text-22 text-gray-1 font-normal leading-10 ">
          <span className="opacity-50">Sua casa com as</span> <br />
          <span className="font-elsie font-black text-82 leading-94 small-second:text-6xl">
            melhores <br /> plantas
          </span>
        </h2>

        <p className="font-normal text-base leading-26 my-8 opacity-50">
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>

        <Form />
      </div>

      <div className="min-w-594 h-650 bg-plant bg-cover bg-no-repeat bg-left md:hidden"></div>
    </section>
  );
}
