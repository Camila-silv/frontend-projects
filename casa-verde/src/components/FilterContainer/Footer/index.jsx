export default function Footer({cleanFilter, filterProductList}) {
  return (
    <footer className="flex p-6 gap-4 border">
      <button
        className="w-full border-2 border-black-1 text-black-1 uppercase px-8 py-3 rounded-lg"
        onClick={cleanFilter}
      >
        Limpar filtros
      </button>
      <button
        className="w-full border-2 border-black-1 text-white-1 uppercase px-8 py-3 rounded-lg bg-black-1"
        onClick={filterProductList}
      >
        Aplicar filtro
      </button>
    </footer>
  );
}
