import { useState } from "react";
import {
  Footer,
  FormSection,
  GallerySection,
  Header,
  MainContent,
  SectionAboutTheSeries,
} from "./components";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`overflow-hidden relative bg-no-repeat bg-cover ${
        theme === "light" ? "bg-florest-light-theme" : "bg-florest-dark-theme"
      }`}
    >
      <Header theme={theme} setTheme={setTheme} />

      <MainContent theme={theme}>
        <SectionAboutTheSeries theme={theme} />

        <GallerySection theme={theme} />

        <FormSection theme={theme} />
      </MainContent>

      <Footer theme={theme} />
    </div>
  );
}
