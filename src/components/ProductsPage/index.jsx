import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import {productsObj} from "./productObj";
import Product from "./Product";


export default function ProductsPage() {
    return (
        <>
            <MainLayout>
                <h1>Товары</h1>
                <div className={style.products}>
                    {productsObj.map(p => <Product key={p.id} data={p}/>)}
                </div>
            </MainLayout>
        </>

    )
}