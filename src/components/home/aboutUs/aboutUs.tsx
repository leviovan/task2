import style from "./aboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={style.aboutUs} id="aboutUs">
      <div className="container">
        <div className={style.body}>
          <div className={style.desc}>
            <h2 className={style.title}>About us</h2>
            <p className={style.text}>
              Every day a person has a choice what to spend his money on. Stores
              and websites offer an endless list of products. <br />
              But we will help you make the right choice!
            </p>
            <span className={style.tag}>Goods4you</span>
          </div>
          <div className={style.containerImg}>
            <img
              src="../src/img/pexels-budgeron-bach-5158825 2.jpeg"
              alt="Картинка нас"
            />
          </div>
          <svg
            className={style.bgFigure}
            width="550.000000"
            height="424.000000"
            viewBox="0 0 550 424"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip30968_133">
                <rect
                  id="figure"
                  width="550.000000"
                  height="424.000000"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="figure"
              width="550.000000"
              height="424.000000"
              fill="#FFFFFF"
              fillOpacity="0"
            />
            <g clipPath="url(#clip30968_133)">
              <circle
                id="Ellipse 4"
                cx="-14.000000"
                cy="102.000000"
                r="321.500000"
                stroke="#FFFFFF"
                strokeOpacity="0.500000"
                strokeWidth="1.000000"
              />
              <circle
                id="Ellipse 5"
                cx="401.500000"
                cy="-33.500000"
                r="148.000000"
                stroke="#FFFFFF"
                strokeOpacity="0.500000"
                strokeWidth="1.000000"
              />
              <circle
                id="Ellipse 6"
                cx="511.500000"
                cy="65.500000"
                r="7.500000"
                fill="#F14F4F"
                fillOpacity="1.000000"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
