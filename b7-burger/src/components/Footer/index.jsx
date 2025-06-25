export default function Footer({ logo }) {
  return (
    <footer className="bg-black-light px-5 laptop:px-10 py-16">
      <div className="flex flex-col items-center container mx-auto laptop:flex-row laptop:justify-between laptop:align-center">
        <a href="/" title="Início">
          <img
            src={logo}
            alt="Logo da B7Burger"
            title="Logo da B7Burger"
            height="34"
            width="182"
            className="mb-4 laptop:mb-0"
          />
        </a>
        <p className="text-xl text-[#5F5F5F] font-normal text-center laptop:text-2xl">
          powered by B7Web.
        </p>
      </div>
    </footer>
  );
}
