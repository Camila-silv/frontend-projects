import logo from "./assets/images/logo.png";

import {
  Card,
  Footer,
  Header,
  SectionBurgerSearch,
  Banner,
} from "./components";

export default function App() {
  return (
    <>
      <Header logo={logo} />

      <main>
        <div>
          <div className="bg-pattern-hero px-5 laptop:px-10 pt-16 laptop:bg-desktop-pattern-hero ">
            <div className="container mx-auto pb-10 laptop:pt-6 laptop:pb-16">
              <Banner />
              
              <SectionBurgerSearch />
            </div>
          </div>

          <section className="bg-black-dark py-10 px-5 laptop:px-10">
            <div className="container mx-auto grid grid-cols-1 gap-6 laptop:grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </main>

      <Footer logo={logo} />
    </>
  );
}
