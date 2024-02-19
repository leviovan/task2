import { Route, Routes } from "react-router";
import Navigation from "../../nabigation/navigation";
import style from "./header.module.scss";
import { Router } from "react-router";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.body}>
        <span className={style.logo}>Goods4you</span>
        {
          <Routes>
            <Route path={"/"} element={<Navigation />} />
            <Route path={"/admin"} element={<div>42142412</div>} />
          </Routes>
        }
      </div>
    </header>
  );
};

export default Header;
