import { useLocation } from "react-router";
import Navigation from "../nabigation/navigation";
import style from "./header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.body}>
          <span className={style.logo}>Goods4you</span>

          {pathname === "/" ? (
            <Navigation />
          ) : (
            <NavLink to={"/"}>Back to site</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
