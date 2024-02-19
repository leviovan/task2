import { HashLink as Link } from "react-router-hash-link";
import style from "./header.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.body}>
        <span className={style.logo}>Goods4you</span>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}>
              <Link to="#catalog"> Catalog</Link>
            </li>
            <li className={style.item}>
              <Link to="#aboutUs"> About Us</Link>
            </li>
            <li className={style.item}>
              <Link to="#ProductSelection"> Product selection</Link>
            </li>
            <li className={style.item}>
              <Link to="#team"> our team</Link>
            </li>
            <li className={style.item}>
              <Link to="#FAQ"> FAQ</Link>
            </li>
            <li className={style.item}>
              <NavLink to="#catalog"> ForStaff</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
