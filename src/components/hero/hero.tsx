import React from 'react'
import Header from './header/header'
import style from "./hero.module.scss"

const Hero = () => {
  return (<div className={style.hero}>
      <div className="container">
          <Header/>
        <div className={style.body}>
            <h1 className={style.title}>   Any products from famous brands with worldwide delivery</h1>
            <p className={style.text}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
            <button className={style.btn}>Go to shopping</button>
            <span className={style.bglogo}>Goods4you</span>
        </div>
      </div>
      </div>
  )
}

export default Hero
