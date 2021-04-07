import React, {useEffect, useState} from 'react'
import style from './style.module.scss'
import photo from "../../../objs/photo.png";
import basketImg from "../../HomePage/NewProducts/assets/basket.svg";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";


export default function Product({data}) {
  const [count, setCount] = useState(1)
  const basket = JSON.parse(window.localStorage.getItem("basket"))
  const [prodCollector, setProdCollector] = useState(basket ? basket : [])
  const dispatch = useDispatch()
  useEffect(() => {
    prodCollector.length && window.localStorage.setItem("basket", JSON.stringify(prodCollector))
  }, [prodCollector])

  const prodWithCount = {count: count, ...data}
  const currentProd = prodCollector.some(p => data.id === p.id)

  const addProdToBasket = () => {
    setProdCollector(s => currentProd ?
      s.map(p => p.id === data.id ? {...p, count: (p.count + count)} : p) :
      [...s, prodWithCount])
  }


  const [size, setSize] = useState()
  const [color, setColor] = useState()

  const colors = {
    "red": "#E84D4D",
    "green": "#21B11E",
    "yellow": "#DDE100",
    "blue": "#4DB0E8",
  }

  const priceDis = data.price / 100 * data.discount
  return (
    <>
      <NavLink exact to={`/product-page/${data.id}`}>
        <div className={style.item}>
          <div className={style.captionItem}>
            {data.new ? <div className={style.new}>Новинка</div> : ""}
            {data.discount ? <div className={style.discount}>-{data.discount}%</div> : ""}
          </div>
          <div className={style.productPhoto}>
            <img src={photo} alt="photo"/>
          </div>
          <div className={style.name}>
            <p>{data.name}</p>
          </div>
          <div className={style.size}>
            {data.size.map(p => <button onClick={() => setSize(p)} style={{
              border: size === p && "1px solid #8855DD",
              background: size === p && "#8855DD",
              color: size === p && "#fff"
            }}>{p}</button>)}
          </div>
          <div className={style.colors}>
            {data.colors.map(c => <button onClick={() => setColor(c)} style={{
              border: color === c && "2px solid #8855DD",
              background: color === c && "#fff"
            }}>
              <div style={{backgroundColor: colors[c]}}/>
            </button>)}
          </div>
          <div className={style.price}>

            {data.discount ? <div><p className={style.discountPrice}>{data.price} сом</p><p>{priceDis} сом</p></div> :
              <p>{data.price} сом</p>}
          </div>
          <div className={style.basketBtn}>
            <button onClick={addProdToBasket}>В корзину <img src={basketImg} alt="basket"/></button>
          </div>
        </div>
      </NavLink>
    </>

  )
}