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
                        <div className={style.mapsSite}>
                            <div className={style.item1}>
                                <p>О магазине</p>
                                <ul>
                                    <li>Адреса магазинов</li>
                                    <li>Адреса магазинов</li>
                                    <li>Адреса магазинов</li>
                                    <li>Адреса магазинов</li>
                                    <li>Адреса магазинов</li>
                                    <li>Адреса магазинов</li>
                                    <li>Адреса магазинов</li>
                                </ul>
                            </div>
                            <div className={style.item2}>
                                <p>Покупателям</p>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                            </div>
                            <div className={style.item1}>
                                <p>Информация</p>
                                <ul>
                                    <li>Политика конфиденциальности и оферта</li>
                                    <li>Пользовательское соглашение</li>
                                </ul>
                            </div>
                            <div className={style.contacts}>
                                <p>Доставка с 8:00 до 23:00</p>
                                <a href="#">+996(709) 64-06-85</a>
                                <a href="#">+996(706) 64-06-85</a>
                            </div>
                        </div>
                        <div className={style.footerLogo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <p className={style.security}>© 2020 Любое использование контента без письменного разрешения запрещено</p>
                    </div>
                </Container>
            </div>
        </>

    )
}