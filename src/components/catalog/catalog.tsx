import { useEffect, useState } from "react";
import style from "./catalog.module.scss";
import ListCatalog from "./listCatalog/listCatalog";
import Parameters from "./parameters/parametrs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  IProduct,
  fetchCategory,
  fetchProductByParam,
  fetchProducts,
} from "../../store/categories/categorySlice";

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(9);
  const [currentParametrs, setCurrentParametrs] = useState("tops");

  const category = useSelector<RootState>(
    (state) => state.category.category
  ) as string[];
  const products = useSelector<RootState>(
    (state) => state.category.product.products
  ) as IProduct[];

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, []);

  const applyHandler = (param: string) => {
    dispatch(fetchProductByParam(param));
  };

  const resetHandler = () => {
    dispatch(fetchProducts());
    setPage(9);
  };

  return (
    <div className={style.catalog} id="catalog">
      <div className="container">
        <div className={style.body}>
          <div className={style.aside}>
            <h2 className={style.title}>Catalog</h2>
            <Parameters
              category={category}
              onClick={setCurrentParametrs}
              aplly={() => applyHandler(currentParametrs)}
              currentParametrs={currentParametrs}
              reset={() => resetHandler()}
            />
          </div>
          <ListCatalog
            products={products}
            page={page}
            setPage={() => setPage((i) => i + 9)}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
