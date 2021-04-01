import React from 'react'
import style from './style.module.scss'
import Header from "./Header";
import Container from "../Container";
import Footer from "./Footer";


export default function MainLayout({children}) {
    return (
        <>
            <Header/>
            <Container>
                <div className={style.children}>
                    {children}
                </div>
            </Container>
            <Footer/>
        </>
    )
}