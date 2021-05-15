import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import SliderHome from "./Slider";
import NewProducts from "./NewProducts";
import {Breadcrumbs, Link, Typography} from "@material-ui/core";
import Main from "./Main";
import Adventages from "./Adventages";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Home() {
    return (
        <>
            <MainLayout>
                <Main/>
                {/*<Breadcrumbs aria-label="breadcrumb">*/}
                {/*    <Typography>Главная</Typography>*/}
                {/*</Breadcrumbs>*/}
                <SliderHome/>
                <NewProducts/>
                <Adventages/>
            </MainLayout>
        </>

    )
}