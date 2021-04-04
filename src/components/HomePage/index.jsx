import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import SliderHome from "./Slider";
import NewProducts from "./NewProducts";
import {Breadcrumbs, Link, Typography} from "@material-ui/core";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Home() {
    return (
        <>
            <MainLayout>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography>Главная</Typography>
                </Breadcrumbs>
                <SliderHome/>
                <NewProducts/>
            </MainLayout>
        </>

    )
}