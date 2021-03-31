import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import SliderHome from "./Slider";
import NewProducts from "./NewProducts";


export default function Home() {
    return (
        <>
            <MainLayout>
                <SliderHome/>
                <NewProducts/>
            </MainLayout>
        </>

    )
}