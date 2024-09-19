export default function ModalBg({ activateBg, children }) {
  return (
    <div
      className={`fixed top-0 left-0 bg-black-2 w-full px-4 h-full z-50 flex justify-center items-center transition-all duration-200  ${
        activateBg ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
