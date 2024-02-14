import "./App.css";
import AboutUs from "./components/aboutUs/aboutUs";
import Catalog from "./components/catalog/catalog";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import ProductForYou from "./components/productForYou/productForYou";
import Team from "./components/team/team";

function App() {
  return (
    <>
      <Hero />
      <Catalog />
      <AboutUs />
      <ProductForYou />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
