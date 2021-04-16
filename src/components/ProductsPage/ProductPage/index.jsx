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
import './style.scss'
import SliderPhoto from "./sliderPhoto";
import line1 from './assets/line1.svg'
import line2 from './assets/line2.svg'

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

const colors = {
    "red": "#E84D4D",
    "green": "#21B11E",
    "yellow": "#DDE100",
    "blue": "#4DB0E8",
}

const ColorItemElement = ({name}) => {
    const [input, setInput] = useState(1)

    if (input === " " && input === 0){
        setInput(0)
    }
    if( input === " " && input === 0 && input === ""){
        setInput(1)
    }
    const inputChange = (e) => {



        setInput(e.target.value)
    }
    const inputAdd = (e) => {
        if(input < 999){
            setInput(+input + +1)
        }
    }
    const inputMinus = (e) => {
        if(input > 1){
            setInput(+input - +1)
        }
    }


    return (
        <div className={style.colorItem}>
            <div className={style.blockColor} style={{background: colors[name]}}/>
            <label style={{background: colors[name]}}>
                <button onClick={inputMinus}><img src={line1} alt="img"/></button>
                <input type="number" value={input} onChange={inputChange}/>
                <button onClick={inputAdd}><img src={line2} alt="img"/></button>
            </label>
        </div>
    )
}


export default function ProductPage({computedMatch: {params: {id}}}) {
    const product = productsObj.find(p => p.id === +id)

    const priceDis = product.price / 100 * product.discount


    return (
        <>
            <MainLayout>
                <div className={style.productPage}>
                    <div className={style.photoImgs}>
                        <div className={style.discount}>
                            {product.discount ? <p>-{product.discount}%</p> : ""}
                        </div>
                        <div className={style.new}>
                            {product.new ? <p>Новинка</p> : ""}
                        </div>
                        <p className={style.productName}>{product.name}</p>
                        <SliderPhoto discount={product.discount} photoesObj={photoesObj}/>

                        {/*<div className={style.imgMain}>*/}
                        {/*  {photoesObj.filter(p => p.id === 1).map(p => <img src={p.img} alt="photo"/>)}*/}
                        {/*</div>*/}
                        {/*<div className={style.imgs}>*/}
                        {/*  {photoesObj.filter(p => p.id > 1).map(p => <PhotoElements key={p.id} data={p}/>)}*/}
                        {/*</div>*/}

                    </div>
                    <div className={style.productTxt}>
                        <p className={style.articul}>Артикул: 22423</p>
                        <div className={style.packaging}>
                            <div className={style.packagingBlock}>
                                <div className={style.packagingText}><p>В одной упаковке</p></div>
                                <div className={style.packagingSize}>
                                    {product.size.map(p => <div>{p}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className={style.moneys}>
                            {product.discount ?
                                <p className={style.productPrice}>{priceDis} сом<span>{product.price} сом</span></p> :
                                <p className={style.productPrice}>{product.price}</p>}
                        </div>
                        <div className={style.colorsCount}>
                            <div className={style.colorsRow}>
                                {product.colors.map(p => <ColorItemElement name={p}/>)}
                            </div>
                        </div>

                    </div>
                </div>
            </MainLayout>
        </>
    )
}