import React from 'react'
import Slider from "react-slick";
import style from './style.module.scss'
import sliderPhoto from './assets/Frame 4.png'
import './slider.scss'


export default function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className={style.slider}>
        <Slider{...settings}>
          <div className={style.item}>
            <img src={sliderPhoto} alt="photo"/>
          </div>
          <div className={style.item}>
            <img src={sliderPhoto} alt="photo"/>
          </div>
          <div className={style.item}>
            <img src={sliderPhoto} alt="photo"/>
          </div>
          <div className={style.item}>
            <img src={sliderPhoto} alt="photo"/>
          </div>
          <div className={style.item}>
            <img src={sliderPhoto} alt="photo"/>
          </div>
          <div className={style.item}>
            <img src={sliderPhoto} alt="photo"/>
          </div>
        </Slider>
      </div>
    </>
  )
}