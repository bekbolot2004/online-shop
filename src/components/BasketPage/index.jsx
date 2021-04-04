import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import basketImg from './assets/basket.svg'



export default function BasketPage() {
    return (
        <MainLayout>
            <div className={style.basket}>
                <h1>В корзине пусто</h1>
                <img src={basketImg} alt="basket"/>
            </div>
        </MainLayout>
    )
}