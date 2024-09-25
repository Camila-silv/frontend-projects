export default function MainContent({ theme, children }) {
  return (
    <main>
      <div
        aria-hidden="true"
        className={`bg-lamps bg-auto bg-no-repeat bg-right absolute top-[2380px] right-[-450px]  w-1536 h-400 ${
          theme === "light" ? "bg-lamps-light-theme" : "bg-lamps-dark-theme"
        }`}
      ></div>

      {children}
    </main>
  );
}
