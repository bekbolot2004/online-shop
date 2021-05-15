import React from 'react'
import style from './style.module.scss'
import mainPhoto from './assets/bg_1.jpg'
import arrowDown from './assets/chevron-down.svg'

export default function Main() {
    return (
        <div>
            <div className={style.padding}/>
            <div className={style.mainBg} >
                <img src={mainPhoto} alt="mainPhoto"/>
            </div>
            <div className={style.mainTxt}>
                <h1>Женсая одежда <br/> оптом</h1>
                <p className={style.captionDown}>По всему снг</p>
                <a href="#footer">
                    <img src={arrowDown} alt="arrowDown"/>
                </a>
            </div>
            <div className={style.fixedTxt}>
                <p className={style.fixedLeft}>Sonun - TIME TO GET DRESS</p>
                <p className={style.fixedRight}>Since - 2010</p>
            </div>
        </div>
    )
}