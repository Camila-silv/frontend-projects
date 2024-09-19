import { useContext } from "react";
import { VscSettings } from "react-icons/vsc";
import { NewsletterContext } from "../../../context/newsletterContext";

export default function Button() {
  const { setShowFilterAndSort } = useContext(NewsletterContext);

  const handleFilter = () => {
    setShowFilterAndSort(true);
    document.querySelector("body").style.overflow = "hidden";
  };
  return (
    <button
      className="border-2 border-black-1 text-black-1 absolute right-10 uppercase px-8 py-3 rounded-lg hover:bg-black-1 hover:text-white-1 flex items-center gap-2 larger:right-0 larger:px-4 larger:top-0"
      onClick={handleFilter}
    >
      <VscSettings className="text-xl" />{" "}
      <span className="larger:hidden">Filtrar e Ordenar</span>
    </button>
  );
}
