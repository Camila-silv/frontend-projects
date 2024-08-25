import bestSellingProductsSection from "./data/bestSellingProductsSection.json";
import ProductCard from "./ProductCard";

export default function BestSellingProductsSection() {
  return (
    <section className="mx-auto font-inter md:w-690 lg:w-1110 ">
      <h2 className="text-black-2 text-28 text-center font-medium py-5 leading-33 md:py-8 lg:pt-12 lg:text-32">
        Produtos que estão bombando!
      </h2>

      <ul className="flex  justify-center  gap-7 pb-12 flex-wrap md:justify-between">
        {bestSellingProductsSection.map((item) => {
          return (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              src={item.src}
              alt={item.alt}
              product={item}
            />
          );
        })}
      </ul>
    </section>
  );
}
