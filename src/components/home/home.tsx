import AboutUs from "../aboutUs/aboutUs";
import Catalog from "../catalog/catalog";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import ProductForYou from "../productForYou/productForYou";
import Team from "../team/team";

function Home() {
  return (
    <>
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
