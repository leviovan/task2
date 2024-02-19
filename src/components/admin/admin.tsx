import { useDispatch, useSelector } from "react-redux";
import style from "./admin.module.scss";
import { AppDispatch, RootState } from "../../store/store";
import {
  fetchProductsRequest,
  fetchProductsWithLimit,
} from "../../store//product/productSlice";
import { useEffect, useState } from "react";
import Search from "./search/search";
import ListCatalogAdmin from "./listCatalogAdmin/listCatalogAdmin";

const Admin = () => {
  const products = useSelector((s: RootState) => s.product.products);
  const [page, setPage] = useState(9);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsWithLimit());
  }, []);
  console.log(products, "products");
  const [request, setRequest] = useState("");

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
            setRequest={(e) => setRequest(e.currentTarget.value)}
            request={request}
          />
          <div className={style.list}>
            <ListCatalogAdmin
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
