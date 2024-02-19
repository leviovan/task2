import { useDispatch, useSelector } from "react-redux";
import style from "./admin.module.scss";
import { AppDispatch, RootState } from "../../store/store";
import {
  fetchProductsRequest,
  fetchProductsWithLimit,
} from "../../store/categories/categorySlice";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import ListCatalog from "../catalog/listCatalog/listCatalog";
import Search from "./search/search";
const Admin = () => {
  const products = useSelector((s: RootState) => s.category.product.products);
  const [page, setPage] = useState(9);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsWithLimit());
  }, []);
  console.log(products, "products");
  const [request, setRequest] = useState("second");

  const requestHandler = (request: string) => {
    dispatch(fetchProductsRequest(request));
  };

  return (
    <div className={style.admin}>
      <div className="container">
        <div className={style.content}>
          <h2 className={style.title}>All products</h2>
          <Search
            onClick={() => requestHandler(request)}
            setRequest={(e: HTML) => setRequest(e.currentTarget.value)}
            request={request}
          />
          <div className={style.list}>
            <ListCatalog
              products={products}
              page={page}
              setPage={() => setPage((i) => i + 9)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
