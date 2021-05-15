import React from 'react'
import style from "./style.module.scss";
import delivery from './assets/Delivery.svg'
import like from './assets/Like.svg'
import returnIcon from './assets/return.svg'
import visa from './assets/Visa.svg'


export default function Adventages() {
    return (
        <div>
            <div className={style.new}>
                <h1 className={style.caption}>Преимущество</h1>
                <h1 className={style.bg}>Преимущество</h1>
            </div>
            <div className={style.advantagesBlocks}>
                <div className={style.item}>
                    <div className={style.icon}>
                        <img src={delivery} alt="icon"/>
                    </div>
                    <div className={style.itemDescription}>
                        <h2>Доставка по всему СНГ</h2>
                        <p>Досавка по карго надёжно и быстро и
                            ,ipsum,Lorem Lorem ipsum,Lorem ipsum,Lorem ipsum,ipsum,Lorem</p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <img src={like} alt="icon"/>
                    </div>
                    <div className={style.itemDescription}>
                        <h2>Доставка по всему СНГ</h2>
                        <p>Досавка по карго надёжно и быстро и
                            ,ipsum,Lorem Lorem ipsum,Lorem ipsum,Lorem ipsum,ipsum,Lorem</p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <img src={returnIcon} alt="icon"/>
                    </div>
                    <div className={style.itemDescription}>
                        <h2>Доставка по всему СНГ</h2>
                        <p>Досавка по карго надёжно и быстро и
                            ,ipsum,Lorem Lorem ipsum,Lorem ipsum,Lorem ipsum,ipsum,Lorem</p>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.icon}>
                        <img src={visa} alt="icon"/>
                    </div>
                    <div className={style.itemDescription}>
                        <h2>Доставка по всему СНГ</h2>
                        <p>Досавка по карго надёжно и быстро и
                            ,ipsum,Lorem Lorem ipsum,Lorem ipsum,Lorem ipsum,ipsum,Lorem</p>
                    </div>
                </div>
            </div>
        </div>
    )
}