
import style from "./catalog.module.scss"
import ListCatalog from "./parameters/listCatalog/listCatalog"
import Parameters from './parameters/parametrs'

const Catalog = () => {
  return (
    <div className={style.catalog}>
      <div className="container">
            <div className={style.body}>
                <div className={style.aside}>
                  <h2  className={style.title}>Catalog</h2>
                  <Parameters/>
                </div>
                <ListCatalog/>

            </div>

      </div>
    </div>
  )
}

export default Catalog
