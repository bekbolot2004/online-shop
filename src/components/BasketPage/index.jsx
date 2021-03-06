import React, {useState} from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import {useDispatch, useSelector} from "react-redux";
import basketImg from './assets/basket.svg'
import BasketForm from "./BasketForm";
import {removeCartItem, plusCartCountColor} from "../../redux/actions/cart";

const ProductCart = ({p, onRemove,}) => {

    const handleRemoveClick = () => {
        onRemove(p.id);
    };


    const ColorElement = ({color, coun, id, idColor}) => {
        const [count, setCount] = useState(coun)
        const dispatch = useDispatch()

        const onAddCountColor = (id, count) => {
            dispatch(plusCartCountColor(id, count));
        };

        const handleChangeInput = (e) => {
            setCount(+e.target.value)
        }

        if (count > 10000) {
            setCount(10000)
        }

        const handleClickMinus = () => {
            if (count > 0) {
                setCount(count - 1)
            }
        }
        const handleClickPlus = () => {
            if (count < 10000) {
                setCount(count + 1)
            }
            onAddCountColor(id)
        }

        return (
            <div className={style.colorElement}>
                <div className={style.color}>{color}</div>
                <div className={style.colorCount}>
                    <button onClick={handleClickMinus}>-</button>
                    <input type="text" value={count} onChange={handleChangeInput}/>
                    <button onClick={handleClickPlus}>+</button>
                </div>
            </div>
        )
    }

    return (
        <div className={style.basketProduct}>
            <div className={style.productImgTitle}>
                <div className={style.productImg}>
                    <img src={p.image} alt="img"/>
                </div>
                <div className={style.productTitle}>
                    <div>
                        <p>{p.title}</p>
                        <p>{p.discription}</p>
                    </div>
                    <div>
                        <p>????????:{p.price} ??????</p>
                    </div>
                </div>
            </div>
            <div className={style.sizeAll}>
                {p.size.map(s => <p>{s.size} - {p.count} ????</p>)}
            </div>
            <div className={style.quantityTotal}>
                ?????????? {p.size.length * p.count} ????
            </div>
            {/*<div className={style.priceAll}>*/}
            {/*    ???????? ????????????????*/}
            {/*</div>*/}
            <div className={style.colors}>
                {p.colors.map((c, index) => <ColorElement key={index} color={c.color} coun={c.count} idColor={c.id}
                                                          id={p.id}/>)}
            </div>
            <div className={style.count}>
                ????????????????
            </div>
            <div className={style.countAll}>
                ??????????
            </div>
            {/*<div className={style.totalPrice}>*/}
            {/*    ?????????? ????????*/}
            {/*/!*</div>*!/*/}
            {/*<div className={style.totalPrice}>*/}
            {/*    ????????????????*/}
            {/*</div>*/}
            <button onClick={handleRemoveClick}>??????????????</button>
        </div>
    )
}

export default function BasketPage() {
    const dispatch = useDispatch();
    const {items, totalCount, totalPrice} = useSelector(({cart}) => cart);

    const addedProducts = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };


    return (
        <MainLayout>
            <div className={style.basketPage}>
                {totalPrice}
                {totalCount === 0
                    ?
                    <div className={style.cart}>
                        <h1>?? ?????????????? ??????????</h1>
                        <img src={basketImg} alt="basket"/>
                    </div>
                    :
                    <div className={style.basket}>
                        <div className={style.basketCaption}>
                            <div className={style.title}>
                                ??????????
                            </div>
                            {/*<div className={style.pricePiece}>*/}
                            {/*    ???????? ???? ??????????*/}
                            {/*</div>*/}
                            <div className={style.sizeAll}>
                                ??????????????
                            </div>
                            <div className={style.quantityTotal}>
                                ???????????????????? ?? ??????????
                            </div>
                            {/*<div className={style.priceAll}>*/}
                            {/*    ???????? ????????????????*/}
                            {/*</div>*/}
                            <div className={style.colors}>
                                ??????????
                            </div>
                            <div className={style.count}>
                                ????????????????
                            </div>
                            <div className={style.countAll}>
                                ??????????
                            </div>
                            {/*<div className={style.totalPrice}>*/}
                            {/*    ?????????? ????????*/}
                            {/*/!*</div>*!/*/}
                            {/*<div className={style.totalPrice}>*/}
                            {/*    ????????????????*/}
                            {/*</div>*/}
                        </div>
                        <div className={style.basketRow}>
                            {/*{}*/}
                            {addedProducts.map((p, index) => (
                                <ProductCart key={index} p={p} onRemove={onRemoveItem}/>
                            ))}
                        </div>
                        {/*<div className={style.form}>*/}
                        {/*    <div className={style.inputItem}>*/}
                        {/*        <label>*/}
                        {/*            ??????*/}
                        {/*            <input type="text"  placeholder={"??????"}/>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.inputItem}>*/}
                        {/*        <label>*/}
                        {/*            ??????????????*/}
                        {/*            <input type="text"  placeholder={"??????????????"}/>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.inputItem}>*/}
                        {/*        <label>*/}
                        {/*            ?????????? ????????????????*/}
                        {/*            <input type="text"  placeholder={"?????????? ????????????????"}/>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.inputItem}>*/}
                        {/*        <label>*/}
                        {/*            Email*/}
                        {/*            <input type="email"  placeholder={"Email"}/>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.inputItem}>*/}
                        {/*        <TextField id="outlined-basic" label="Outlined" variant="outlined" color={"#fffff"} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <BasketForm totalPrice={totalPrice}/>
                    </div>
                }
            </div>
        </MainLayout>
    )
}