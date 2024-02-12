import style from './parametrs.module.scss';

const Parameters = () => {
  return (
    <div className={style.parameters}>
          <h3 className={style.title}>Selection by&nbsp;parameters</h3>
          <p className={style.subtitle}>Category</p>
          <div className={style.list}>
            {[...Array(8).fill("sneakers")].map((item,i)=><div key={`${item}+${i}`} className={style.item}>{item}</div>)}
          </div>
         <button className={style.btn} style={{background: "rgb(68, 75, 88)"}} >Apply</button>
         <button className={style.btn} style={{background: "rgb(255, 244, 238)"}} >Reset</button>
    </div>
  )
}

export default Parameters
