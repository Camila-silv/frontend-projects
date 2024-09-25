import Logo from "../../assets/logo.png"

export default function Header() {
  return (
    <header className="flex justify-between max-w-1200 w-full mx-auto h-20 items-center z-20 relative">
      <div>
        <img src={Logo} alt="Logo Casa Verde" />
      </div>
      <nav>
        <ul className="flex gap-3 text-base font-normal md:hidden">
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
            <a href="" className="flex gap-3">
              Meu carrinho
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
