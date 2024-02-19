import AboutUs from "./aboutUs/aboutUs";
import Catalog from "./catalog/catalog";
import Faq from "./faq/faq";
import Footer from "./footer/footer";
import Hero from "./hero/hero";
import ProductForYou from "./productForYou/productForYou";
import Team from "./team/team";

function Home() {
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

export default Home;
