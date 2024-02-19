import { useEffect, useState } from "react";
import style from "./adminProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProductsbyId } from "../../store/product/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "react-router";
const AdminProduct = () => {
  const dipatch = useDispatch<AppDispatch>();
  const { idProduct } = useParams();

  const {
    brand,
    category,
    description,
    images,
    price,
    rating,
    stock,
    title,
    discountPercentage,
    id,
  } = useSelector((s: RootState) => s.product.currentProductAdmin);

  const [character, setcharacter] = useState({});

  useEffect(() => {
    dipatch(fetchProductsbyId(idProduct));
  }, []);

  useEffect(() => {
    setcharacter({
      Rating: rating,
      "Base price": price,
      "Discount percentage": discountPercentage,
      Stock: stock,
      Brand: brand,
      Category: category,
      "Discount price": Math.floor(price - price / discountPercentage),
      Description: description,
    });
    return () => {
      setcharacter({});
    };
  }, [
    brand,
    category,
    description,
    discountPercentage,
    id,
    price,
    rating,
    stock,
  ]);

  console.log(character);

  return (
    <div className={style.adminProduct}>
      <div className="container">
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.body}>
            <div className={style.swiperContainer}>
              <Swiper
                className={style.swiper}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {images.map((item) => (
                  <SwiperSlide className={style.slide}>
                    <img src={item} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={style.desc}>
              {Object.keys(character).map((key: string) => {
                return (
                  <p className={style.key}>
                    {key} <span> {character[key]}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
