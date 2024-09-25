export default function GallerySection({theme}) {
  return (
    <section className="mt-20 z-10 relative w-full max-w-1200 mx-auto">
      <h2
        className={`text-5xl font-archivo-black uppercase text-red-normal mb-10 ${
          theme === "light" ? "font-archivo-black" : "font-rubik"
        }`}
      >
        a segunda série mais
        <br /> assistida da netflix
      </h2>

      <div className="flex gap-10 flex-wrap">
        <div
          className={` w-276 h-276 p-4 ${
            theme === "light" ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="../public/content/serie-image-01.png"
            alt=""
            className={`w-full h-full border border-red-dark p-2 ${
              theme === "light" ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={` w-276 h-276 p-4 ${
            theme === "light" ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="../public/content/serie-image-02.png"
            alt=""
            className={`w-full h-full border border-red-dark p-2 ${
              theme === "light" ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={` w-276 h-276 p-4 ${
            theme === "light" ? "bg-black" : "bg-white"
          }`}
        >
          <img
            src="../public/content/serie-image-03.png"
            alt=""
            className={`w-full h-full border border-red-dark p-2 ${
              theme === "light" ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
