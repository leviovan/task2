import { useSelector } from "react-redux";
import style from "./productForYou.module.scss";
import { RootState } from "../../../store/store";
import { useState } from "react";
import Productcard from "../catalog/listCatalog/Product/productcard";

const ProductForYou = () => {
  const category = useSelector((s: RootState) => s.category.category);

  const [page, setPage] = useState(1);

  const [currentCaterogies, setCurrentCaterogies] = useState<string[]>([]);
  const items = useSelector((s: RootState) => s.product.productsQuiz);
  const [currentItem, setCurrentItem] = useState(items);
  const checkboxHandler = (category: string) => {
    currentCaterogies.includes(category)
      ? setCurrentCaterogies((s) => s.filter((cate) => cate !== category))
      : setCurrentCaterogies((s) => [...s, category]);
  };

  const nextStepHandler = () => {
    setCurrentItem(
      items
        .filter((item) => currentCaterogies.includes(item.category))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3)
    );
    setPage(2);
  };
  const changeSelectionHandler = () => {
    setPage(1);
  };

  return (
    <div className={style.productForYou} id="ProductSelection">
      <div className="container">
        {page === 1 ? (
          <div className={style.body}>
            <h3 className={style.title}>
              We will select the perfect product for you
            </h3>
            <p className={style.subtitle}>
              Answer three questions and we will send you a catalog with the
              most suitable products for you.
            </p>
            <div className={style.content}>
              <h4 className={style.title}>
                What type of product are you considering?
              </h4>
              <div className={style.list}>
                {category.map((item, i) => (
                  <div key={`sheakers${i}`} className={style.item}>
                    <span>
                      <input
                        onClick={() => checkboxHandler(item)}
                        className={style.checkbox}
                        type="checkbox"
                        name={`sneakers${i}`}
                        checked={currentCaterogies.includes(item)}
                        id={`sneakers${i}`}
                      />
                      <label className={style.label} htmlFor={`sneakers${i}`}>
                        {item}
                      </label>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.pagination}>
              <span className={style.step}>{page} of 3</span>
              <button className={style.btn} onClick={() => nextStepHandler()}>
                Next step
              </button>
            </div>
          </div>
        ) : (
          <div className={style.body}>
            <div className={style.title}>Your selection is ready!</div>
            <div className={style.items}>
              {currentItem.map((item) => (
                <Productcard {...item} />
              ))}
            </div>
            <button
              className={style.btn}
              onClick={() => changeSelectionHandler()}
            >
              Change selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductForYou;
