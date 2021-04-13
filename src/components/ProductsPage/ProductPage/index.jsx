import React, {useEffect, useState} from 'react'
import style from './style.module.scss'
import MainLayout from "../../MainLayout";
import {productsObj} from "../../../objs/productObj";
import photo1 from './assets/photo_2021-04-07_19-36-37.jpg'
import photo2 from './assets/photo_2021-04-07_19-36-40.jpg'
import photo3 from './assets/photo_2021-04-07_19-36-41.jpg'
import photo4 from './assets/photo_2021-04-07_19-36-43.jpg'
import photo5 from './assets/photo_2021-04-07_19-36-45.jpg'
import photo6 from './assets/photo_2021-04-07_19-36-46.jpg'
import Slider from "react-slick";
import './style.scss'
import photoImg from "../../../objs/photo.png";

export const photoesObj = [
  {
    id: 1,
    img: photo1
  },
  {
    id: 2,
    img: photo2
  },
  {
    id: 3,
    img: photo3
  },
  {
    id: 4,
    img: photo4
  },
  {
    id: 5,
    img: photo5
  },
  {
    id: 6,
    img: photo6
  },
]

export default function ProductPage({computedMatch: {params: {id}}}) {
  const products = productsObj
  const product = products.find(p => p.id === +id)

  const [openModal, setOpenModal] = useState(false)
  const [slider, setSlider] = useState(1)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const PhotoElements = ({data}) => {
    const handleClick = () => {
      setSlider(+data.id)
      alert(+data.id)
    }
    return (
      <div className={style.img} onClick={handleClick}>
        <img src={data.img} alt="photo"/>
      </div>
    )
  }

  const SliderElements = ({data}) => {
    return (
      <div className={style.item}>
        <img src={data.img} alt="photo"/>
      </div>
    )
  }
  const priceDis = product.price / 100 * product.discount

  return (
    <>
      <MainLayout>
        <div className={style.productPage}>
          <div className={style.photoImgs}>
            <div className={style.imgMain}>
              {photoesObj.filter(p => p.id === 1).map(p => <img src={p.img} alt="photo"/>)}
            </div>
            <div className={style.imgs}>
              {photoesObj.filter(p => p.id > 1).map(p => <PhotoElements key={p.id} data={p}/>)}
            </div>
          </div>
          <div className={style.productTxt}>
            <p className={style.productName}>{product.name}</p>

            <div className={style.moneys}>
              <div className={style.discount}>
                {product.discount ? <p>-{product.discount}%</p> : ""}
              </div>
              {product.discount ? <p className={style.productPrice}>{priceDis} сом<span>{product.price} сом</span></p> :
                <p className={style.productPrice}>{product.price}</p>}
            </div>
            <p>Размеры: {product.size.map(p => <>{p}, </>)}</p>
            <p>Цвета: {product.colors.map(p => <>{p}, </>)}</p>
            <p>Размеры: {product.new ? "Новый" : ""}</p>
          </div>
        </div>
        <div className={style.modalBlock} style={{display: openModal ? "flex" : "none"}}>
          <div className={style.closeModal} onClick={() => setOpenModal(false)}/>
          <div className={style.modal}>
            <div className={style.slider}>
              <Slider{...settings} initialSlide={slider}>
                {photoesObj.map(p => <SliderElements key={p.id} data={p}/>)}
              </Slider>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}