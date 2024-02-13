import React from 'react'
import style from "./productForYou.module.scss";
const ProductForYou = () => {
  return (
    <div className={style.productForYou}>
      <div className="container">
            <div className={style.body}>
                <h3 className={style.title}>
                    We will select the perfect product for you
                </h3>
                <p className={style.subtitle}>Answer three questions and we will send you a catalog with the most suitable products for you.</p>

                <div className={style.content}>
                    <h4 className={style.title}>What type of product are you considering?</h4>
                    <div className={style.list}>
                          {[...Array(6)].map((item,i)=><div key={`sheakers${i}`} className={style.item}> 
                    <img className={style.img} src="./../src/img/фото-кросовок.jpeg" alt="фото-кросовок" />
                         <label  className={style.label}  htmlFor={`sneakers${i}`}><input className={style.checkbox}  type="checkbox" name={`sneakers${i}`} id={`sneakers${i}`}/>
                       sneakers</label>
                    </div>)}
                    </div>
                </div>
            </div>

      </div>
    </div>
  )
}

export default ProductForYou
