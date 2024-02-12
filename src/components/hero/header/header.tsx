import React from "react";

import style from "./header.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
<div className={style.body}>      <span className={style.logo}>Goods4you</span>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.item}>Catalog</li>
          <li className={style.item}>About us</li>
          <li className={style.item}>Product selection</li>
          <li className={style.item}>Our team</li>
          <li className={style.item}>Shipping and payment</li>
          <li className={style.item}>Contacts</li>
        </ul>
        <div className={style.cart}>
        <a className={style.link} href="#"> Cart</a>
        <a className={style.logo} href="#">
          <svg
            width="20.281250"
            height="14.982666"
            viewBox="0 0 20.2812 14.9827"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M20.2812 5.35107L16.8374 5.35107L13.2192 0.259766C13.0398 0.00683594 12.6504 -0.0756836 12.3496 0.076416C12.0493 0.228271 11.9521 0.557129 12.1323 0.810547L15.3591 5.35107L4.92212 5.35107L8.14893 0.810547C8.3291 0.556885 8.23193 0.228271 7.93164 0.0761719C7.63013 -0.0756836 7.24219 0.00683594 7.06201 0.259766L3.44385 5.35083L0 5.35083L0 6.42114L1.37549 6.42114L2.98584 13.6726C3.15405 14.4319 3.94019 14.9827 4.85498 14.9827L15.4263 14.9827C16.3411 14.9827 17.1272 14.4319 17.2949 13.6731L18.9055 6.42114L20.2812 6.42114C20.2812 6.42114 20.2812 5.35107 20.2812 5.35107ZM16.0488 13.4761C15.9932 13.729 15.7314 13.9126 15.4263 13.9126L4.85498 13.9126C4.5498 13.9126 4.28809 13.729 4.23169 13.4756L2.66479 6.42114L17.6165 6.42114L16.0488 13.4761Z"
              fill="#FFFFFF"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </a>
      </div>
      </nav></div>
     
    </header>
  );
};

export default Header;
