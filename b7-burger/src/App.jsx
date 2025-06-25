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
          <Banner />
          
          <SectionBurgerSearch />

          <section className="bg-black-dark py-10 px-5 laptop:px-10">
            <div className="container mx-auto grid grid-cols-1 gap-6 laptop:grid-cols-2 desktop:grid-cols-3">
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
