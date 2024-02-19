import style from "./faq.module.scss";
import Quetion from "./quetion/quetion";
const Faq = () => {
  return (
    <div className={style.faq} id="FAQ">
      <div className="container">
        <div className={style.body}>
          <h2 className={style.title}>FAQ</h2>
          <div className={style.content}>
            {[...Array(2)].map(() => {
              return <Quetion />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
