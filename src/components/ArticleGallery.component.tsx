import React, { memo } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGalleryMode } from "../store/ArticlePage";
import { IImage } from "../common/interfaces";
import { TRootState } from "../store/rootReducer";

SwiperCore.use([Navigation, Pagination]);

interface IArticleGalleryProps {
  images: Array<IImage>;
  title: string;
  active: boolean;
}

const ArticleGallery: React.FC<IArticleGalleryProps> = ({
  images = [],
  title = "",
  active = false,
}) => {
  const dispatch = useDispatch();
  const initialSlideIdx = useSelector(
    (state: TRootState) => state.articlePage.galleryIdx
  );

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__container">
        <div className="modal__header">
          <h2>{title}</h2>
          <div className="modal__buttons">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              onClick={() => dispatch(handleGalleryMode(null))}
              className="close-btn"
            />
          </div>
        </div>
        <div className="modal__body">
          <div className="slider-holder">
            {images.length > 1 && initialSlideIdx !== null ? (
              <Swiper
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
                loop
                centeredSlides
                initialSlide={initialSlideIdx}
                navigation
                pagination={{
                  clickable: true,
                  type: "bullets",
                  dynamicBullets: true,
                  dynamicMainBullets: 5,
                }}
              >
                {images.map((image: IImage) => (
                  <SwiperSlide key={image.file}>
                    <div className="slider-holder__slide-container">
                      <div className="slider-holder__img-container">
                        <img src={image.url} alt={image.file} />
                      </div>
                      <p>{image.caption}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>332</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleGallery);
