import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";


export default function PaymantPage() {
    return (
        <MainLayout>
            <div className={style.paymant}>
                <p>Банковска карта VISA</p>
                <p>Элсом 709640685</p>
            </div>
        </MainLayout>
    )
}