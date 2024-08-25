export default function Alert({ alert, text, bgColor }) {
  return (
    <div
      className={`fixed top-10 right-0  bg-black-1 overflow-hidden transition-all duration-700 transition z-50  ${
        alert ? "w-240" : "w-0"
      }`}
    >
      <p className="text-white-1 p-4 text-left w-240">{text}</p>
      <div
        className={`${bgColor} w-full h-1 absolute bottom-0 ${
          alert && "animate-loading"
        }`}
      ></div>
    </div>
  );
}
