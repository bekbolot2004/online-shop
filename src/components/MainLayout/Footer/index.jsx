import React from 'react'
import style from './style.module.scss'
import logo from "./assets/sonun.svg";
import Container from "../../Container";


export default function Footer() {
    return (
        <>
            <div className={style.footerBlock}>
                <Container>
                    <div className={style.footer}>
                        <div className={style.footerLogo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <p>© 2020 Любое использование контента без письменного разрешения запрещено</p>
                    </div>
                </Container>
            </div>
        </>

    )
}