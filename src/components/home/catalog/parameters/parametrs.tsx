import style from "./parametrs.module.scss";
import cx from "classnames";
const Parameters = ({
  category,
  onClick,
  aplly,
  currentParametrs,
  reset,
}: {
  category: string[];
  onClick: (item: string) => void;
  aplly: () => void;
  currentParametrs: string;
  reset: () => void;
}) => {
  return (
    <div className={style.parameters}>
      <h3 className={style.title}>Selection by&nbsp;parameters</h3>
      <p className={style.subtitle}>Category</p>
      <div className={style.list}>
        {category.map((item: string, i: number) => (
          <div
            title={item}
            key={`${item}+${i}`}
            onClick={() => onClick(item)}
            className={cx(
              style.item,
              currentParametrs === item && style.bgLight
            )}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={() => aplly()}
        className={style.btn}
        style={{ background: "rgb(68, 75, 88)" }}
      >
        Apply
      </button>
      <button
        onClick={() => reset()}
        className={style.btn}
        style={{ background: "rgb(255, 244, 238)" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Parameters;
