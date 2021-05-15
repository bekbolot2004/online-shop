import React, {useEffect} from 'react'
import style from './style.module.scss'
import Container from "../../Container";
import {NavLink} from "react-router-dom";
import basket from "./assets/basket.svg";
import {useDispatch, useSelector} from "react-redux";
import HeaderCategory from "./Category";
import {setCategory} from "../../../redux/actions/filters";

export default function Header() {
    const dispatch = useDispatch
    const countBasket = useSelector(({ cart }) => cart.totalCount);

    useEffect(() => {

    },[countBasket])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <>
            <div className={style.headerBlock2}>
                <Container>
                    <div className={style.header2}>
                        <div className={style.headerLogo}>
                            <NavLink to={'/'}>
                                {/*<img src={logo} alt="logo"/>*/}
                                SonunFashion
                            </NavLink>
                        </div>
                        {/*<HeaderHamburger/>*/}
                        {/*<label htmlFor="" className={style.search}>*/}
                        {/*    <input type="text" placeholder={"Поиск..."} />*/}
                        {/*    <button><img src={magnifier} alt="magnifier"/></button>*/}
                        {/*</label>*/}
                        <div className={style.links}>
                            <NavLink exact to={"/"} activeClassName={style.active}>Главная</NavLink>

                            <HeaderCategory onClickCategory={onSelectCategory} />
                            <NavLink exact to={"/products"} activeClassName={style.active}>Товары</NavLink>
                            <NavLink exact to={"/contact"} activeClassName={style.active}>Контакты</NavLink>
                            {/*<NavLink exact to={"/basket"} activeClassName={style.active}>Доставка</NavLink>*/}
                            <NavLink exact to={"/paymant"} activeClassName={style.active}>Оплата</NavLink>
                        </div>
                        <div className={style.basket}>
                            <NavLink exact to={"/basket"}>
                                <img src={basket} alt="basket"/>
                                <span className={style.count}>{countBasket}</span>
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}