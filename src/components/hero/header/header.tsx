import Navigation from "../../nabigation/navigation";
import style from "./header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.body}>
        <span className={style.logo}>Goods4you</span>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
