import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./imageSlider.module.scss";
import SliderImages from "../../../Data/images/sliderImages";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {SliderImages.map((image) => (
          <div className={styles.image}>
            <img src={image} alt="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
