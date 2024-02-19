import Navigation from "../../navigation/navigation";
import style from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.body}>
          <span className={style.logo}>Goods4you</span>
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
