import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import style from "./navigation.module.scss";
const Navigation = () => {
  return (
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
          <Link to="#tea"> our team</Link>
        </li>
        <li className={style.item}>
          <Link to="#FAQ"> FAQ</Link>
        </li>
        <li className={style.item}>
          <NavLink to="#catalog"> ForStaff</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
