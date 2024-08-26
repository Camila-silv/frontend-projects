import categoryItems from "./data/categoryItems.json";
import CategoryItem from "./CategoryItem";




export default function CategoriesSection() {
  return (
    <section className="mx-auto md:w-690 lg:w-1110 font-inter">
      <h2 className="text-black-2 text-28 text-center font-medium py-5  md:py-8 lg:pt-12 lg:text-32">
        Busque por categoria:
      </h2>
      <ul className="flex gap-30 flex-wrap justify-center md:gap-5 md:justify-between ">
        {categoryItems.map((item) => (
          <CategoryItem
            src={item.img}
            alt={item.alt}
            label={item.label}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
}
