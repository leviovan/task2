import { useEffect, useState } from "react";
import style from "./listCatalog.module.scss";
import Productcard from "./Product/productcard";
import { IProduct } from "../../../../store/product/productSlice";

function ListCatalog({
  products,
  page,
  setPage,
}: {
  products: IProduct[];
  page: number;
  setPage: () => void;
}) {
  const [list, setList] = useState<IProduct[]>([]);
  useEffect(() => {
    setList(products.slice(0, page));
  }, [products, page]);

  return (
    <div className={style.listCatalog}>
      <div className={style.list}>
        {list.length !== 0 &&
          list.map((item: IProduct) => <Productcard {...item} />)}
      </div>
      {products.length >= page && (
        <button className={style.btn} onClick={() => setPage()}>
          Shom more
        </button>
      )}
    </div>
  );
}

export default ListCatalog;
