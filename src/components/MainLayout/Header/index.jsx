import React from 'react'
import style from './style.module.scss'
import Container from "../../Container";
import {NavLink} from "react-router-dom";
import logo from "./assets/Sonun.svg";
import catalog from "./assets/catalog.svg";
import magnifier from "./assets/magnifier.svg";
import basket from "./assets/basket.svg";
import CategoryHeader from "./CategoryHeader";


export default function Header() {
    return (
        <>
            <div className={style.headerBlock}>
                <Container>
                    <div className={style.header}>
                        <div className={style.links}>
                            <NavLink exact to={"/"} activeClassName={style.active}>Каталог</NavLink>
                            <NavLink exact to={"/products"} activeClassName={style.active}>Товары</NavLink>
                            <NavLink exact to={"/contact"} activeClassName={style.active}>Контакты</NavLink>
                            <NavLink exact to={"/basket"} activeClassName={style.active}>Корзина и Доставка</NavLink>
                            <NavLink exact to={"/paymant"} activeClassName={style.active}>Оплата</NavLink>
                        </div>
                        <div className={style.phoneAndWatch}>
                            <p>Доставка с 8:00 до 23:00</p>
                            <p>+996(709) 64-06-85</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={style.headerBlock2}>
                <Container>
                    <div className={style.header2}>
                        <div className={style.headerLogo}>
                            <NavLink to={'/'}>
                                <img src={logo} alt="logo"/>
                            </NavLink>
                        </div>
                        <CategoryHeader/>
                        <label htmlFor="" className={style.search}>
                            <input type="text" placeholder={"Поиск..."} />
                            <button><img src={magnifier} alt="magnifier"/></button>
                        </label>
                        <div className={style.basket}>
                            <NavLink exact to={"/basket"}>
                                <img src={basket} alt="basket"/>
                                <span className={style.count}>9</span>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}