import React from 'react'
import style from './style.scss'
import Header from "./Header";
import Container from "../Container";
import Footer from "./Footer";


export default function MainLayout({children}) {
    return (
        <>
            <Header/>
            <div className={style.children}>
                <Container>
                    {children}
                </Container>
            </div>
            <Footer/>
        </>
    )
}