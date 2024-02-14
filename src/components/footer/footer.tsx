import React from "react";
import style from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.body}>
          <span className={style.logo}>Goods4you</span>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.item}>Catalog</li>
              <li className={style.item}>About us</li>
              <li className={style.item}>Product selection</li>
              <li className={style.item}>Our team</li>
              <li className={style.item}>Shipping and payment</li>
              <li className={style.item}>Contacts</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
