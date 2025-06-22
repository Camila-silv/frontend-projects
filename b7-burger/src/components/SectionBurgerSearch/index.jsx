export default function SectionBurgerSearch() {
  return (
    <div>
      <p className="font-inter font-medium text-white text-[30px] text-center my-5 laptop:text-start laptop:text-[32px]">
        Pesquise o seu <br className="hidden laptop:block" />
        Hamburguer favorito!
      </p>
      <div className="flex flex-col gap-5 items-center laptop:flex-row laptop:justify-between">
        <div className="flex gap-3 items-center bg-[#2B2B2B] w-full  h-[67px] rounded-[5px] px-5 laptop:h-[80px]">
          <i class="fa-solid fa-magnifying-glass text-white text-[24px]"></i>
          <input
            type="text"
            placeholder="Digite o nome do Burger"
            className="bg-transparent outline-none text-white grow"
          />
        </div>
        <div className="flex gap-3 items-center bg-[#2B2B2B] w-full  h-[67px] rounded-[5px] px-5 laptop:h-[80px]">
          <select
            name="category"
            id="category"
            className="bg-transparent outline-none text-white grow"
          >
            <option value="">Selecionar categoria</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
