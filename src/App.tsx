import "./App.css";
import AboutUs from "./components/aboutUs/aboutUs";
import Catalog from "./components/catalog/catalog";
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
    </>
  );
}

export default App;
