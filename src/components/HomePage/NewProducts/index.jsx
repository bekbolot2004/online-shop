import React, {useState} from 'react'
import style from './style.module.scss'
import photo from '../../../objs/photo.png'
import basket from './assets/basket.svg'
import {productsObj} from "../../../objs/productObj";
import Product from "../../ProductsPage/Product";






export default function NewProducts() {
    return (
        <>
            <h1>Новове поступление</h1>
            <div className={style.products}>
                {productsObj.filter((p, i) => i < 6).map(p => <Product key={p.id} data={p}/>)}
            </div>
        </>

    )
}