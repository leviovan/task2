import style from "./team.module.scss";

const Team = () => {
  return (
    <div className={style.team}>
      <div className="container">
        <div className={style.body}>
          <h2 className={style.title}>Our team</h2>
          <div className={style.content}>
            <div className={style.column}>
              <span className={style.containerImg}>
                <img
                  className={style.img}
                  src="./../src/img/team/Член команды 1 .png"
                  alt="Член команды 1"
                />
                <p>
                  <span>Maxim</span> Administrator
                </p>
              </span>
              <a className={style.containerImg}>
                <img
                  className={style.img}
                  src="./../src/img/team/Член команды 2.png"
                  alt="Член команды 2"
                />{" "}
                <p>
                  <span>Maxim</span> Administrator
                </p>
              </a>
            </div>
            <div className={style.column}>
              <span className={style.containerImg}>
                <img
                  className={style.img}
                  src="./../src/img/team/Член команды 3.png"
                  alt="Член команды 3"
                />{" "}
                <p>
                  <span>Maxim</span> Administrator
                </p>
              </span>
              <span className={style.containerImg}>
                <img
                  className={style.img}
                  src="./../src/img/team/Член команды 4.png"
                  alt="Член команды 4"
                />{" "}
                <p>
                  <span>Maxim</span> Administrator
                </p>
              </span>
            </div>
            <div className={style.column}>
              <span className={style.containerImg}>
                <img
                  className={style.img}
                  src="./../src/img/team/Член команды 5.png"
                  alt="Член команды 5"
                />{" "}
                <p>
                  <span>Maxim</span> Administrator
                </p>
              </span>
              <span className={style.containerImg}>
                <img
                  className={style.img}
                  src="./../src/img/team/Член команды 6.png"
                  alt="Член команды 6"
                />{" "}
                <p>
                  <span>Maxim</span> Administrator
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.redCircle}></div>
    </div>
  );
};

export default Team;
