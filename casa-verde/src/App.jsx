export default function App() {
  return (
    <>
      <header className="flex justify-between w-3/5 mx-auto font-montSerrat">
        <div>
          <img src="./assets/logo.png" alt="Logo Casa Verde" />
        </div>
        <nav>
          <ul className="flex gap-3 text-base">
            <li>
              <a href="" className="flex gap-3">
                Como fazer <span>/</span>
              </a>
            </li>
            <li>
              <a href="" className="flex gap-3">
                Ofertas <span>/</span>
              </a>
            </li>
            <li>
              <a href="" className="flex gap-3">
                Depoimentos<span>/</span>
              </a>
            </li>
            <li>
              <a href="" className="flex gap-3">
                Vídeos<span>/</span>
              </a>
            </li>
            <li>
              <a href="" className="flex gap-3">Meu carrinho</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
