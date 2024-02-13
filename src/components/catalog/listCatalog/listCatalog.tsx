
import style from './listCatalog.module.scss'
import Productcard, { IProduct } from './Product/productcard'


function ListCatalog() {
  return (
    <div className={style.listCatalog}>

     <div className={style.list}> 
     {[...Array(9).fill({img:"https://www.thenextsole.com/storage/images/DD3384-600.png",name:"Nike Air Force 1 '07 QS'", price:"110 $"})].map((item:IProduct)=>(
    <Productcard {...item}/>)
      )}
    
      </div>
      <button className={style.btn}> Shom more</button>
    </div>
  )
}

export default ListCatalog