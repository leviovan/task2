import { useLayoutEffect } from "react";
import style from "./adminProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProductsbyId } from "../../store/product/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "react-router";
import Form from "./form/form";
const AdminProduct = () => {
  const dipatch = useDispatch<AppDispatch>();
  const { idProduct } = useParams();
  const idProd = idProduct as unknown as number;

  useLayoutEffect(() => {
    dipatch(fetchProductsbyId(idProd));
  }, []);
  const { images, title, id } = useSelector(
    (s: RootState) => s.product.currentProductAdmin
  );
  return (
    <div className={style.adminProduct}>
      <div className="container">
        <div className={style.content}>
          <h2 className={style.title}>Product {id}</h2>
          <div className={style.body}>
            <div className={style.swiperContainer}>
              <Swiper
                className={style.swiper}
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {images.map((item) => (
                  <SwiperSlide className={style.slide}>
                    <img src={item} alt=" Картинка товара" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={style.desc}>
              <h3 className={style.titleProduct}>{title}</h3>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
