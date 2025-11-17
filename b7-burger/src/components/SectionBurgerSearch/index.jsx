export default function SectionBurgerSearch() {
  return (
    <section className="pb-10 pt-28 px-5 laptop:pt-10 laptop:px-10 bg-black-light mt-[-150px] laptop:mt-[-270px]">
      <div className="container mx-auto">
        <p className="font-inter font-medium text-white text-[30px] text-center mb-5 laptop:text-start laptop:text-[32px]">
          Pesquise o seu <br />
          Hamburguer favorito!
        </p>
        <div className="flex flex-col gap-5 items-center laptop:flex-row laptop:justify-between">
          <div className="flex gap-3 items-center bg-[#2B2B2B] w-full  h-[67px] rounded-[5px] px-5 laptop:h-[80px]">
            <i className="fa-solid fa-magnifying-glass text-white text-[24px]"></i>
            <input
              type="text"
              placeholder="Digite o nome do Burger"
              className="bg-transparent outline-none text-white grow h-full"
              aria-label="Pesquise seu lanche"
            />
          </div>
          <div className="flex gap-3 items-center bg-[#2B2B2B] w-full  h-[67px] rounded-[5px] px-5 laptop:h-[80px]">
            <select
              name="category"
              id="category"
              className="bg-black-normal outline-none text-white grow h-full cursor-pointer"
              aria-label="Selecione a categoria de filtro"
            >
              <option value="">Selecionar categoria</option>
              <option value="burgers">Burgers</option>
              <option value="pizza">Pizza</option>
              <option value="vegetariano">Vegetariano</option>
              <option value="kids">Kids</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
