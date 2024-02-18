import { useState } from "react";
import style from "./quetion.module.scss";
import cx from "classnames";
const Quetion = () => {
  const [pop, setPop] = useState(false);

  const handlerClose = () => {
    return setPop(!pop);
  };
  return (
    <div className={style.quetion}>
      <div className={style.header}>
        <h4 className={style.title}>Question 1</h4>
        <button className={style.btn} onClick={() => handlerClose()}>
          <svg
            className={style.svg}
            style={!pop ? { transform: "rotate(45deg)" } : {}}
            width="30.000000"
            height="30.000000"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="+"
              d="M12.9509 12.3623L25 12.3623L25 13.6622L12.9509 13.6622L12.9509 26L11.5732 26L11.5732 13.6622L0 13.6622L0 12.3623L11.5732 12.3623L11.5732 0L12.9509 0L12.9509 12.3623Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
      <div className={cx(style.information, pop && style.pop)}>
        <p className={style.text}>Long answer to the first question</p>
      </div>
    </div>
  );
};

export default Quetion;
