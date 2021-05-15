import React from 'react'
import style from './style.module.scss'
import Product from "../../ProductsPage/Product";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../../redux/actions/products";
import {fetchCategory} from "../../../redux/actions/category";
import {removeCartItem} from "../../../redux/actions/cart";
import sliderImage from "../Slider/assets/Frame 4.png";
import Slider from "react-slick";

export default function NewProducts() {

    const dispatch = useDispatch();

    const items = useSelector(({products}) => products.items);

    React.useEffect(() => {
        dispatch(fetchProducts());
        // dispatch(fetchCategory());
    }, []);

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };



    const handleAddProductsToCart = (obj) => {
        dispatch({
            type: 'ADD_PRODUCTS_CART',
            payload: obj,
        });
    };

    const cartItems = useSelector(({cart}) => cart.items);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className={style.new}>
                <h1 className={style.caption}>Новинки</h1>
                <h1 className={style.bg}>Новинки</h1>
            </div>
            <div className={style.products}>
                {/*{productsObj.filter((p, i) => i < 6).map(p => <Product key={p.id} data={p}/>)}*/}
                <Slider{...settings}>
                    {items.filter((p, i) => i < 6).map(p => <Product
                        key={p.id}
                        data={p}
                        onRemove={onRemoveItem}
                        productBasket={cartItems[p.id] && cartItems[p.id].items.length}
                        onClickAddProducts={handleAddProductsToCart}/>)}
                    {/*<div className={style.item}>*/}
                    {/*    <img src={sliderImage} alt="photo"/>*/}
                    {/*</div>*/}
                    {/*<div className={style.item}>*/}
                    {/*    <img src={sliderImage} alt="photo"/>*/}
                    {/*</div>*/}
                    {/*<div className={style.item}>*/}
                    {/*    <img src={sliderImage} alt="photo"/>*/}
                    {/*</div>*/}
                    {/*<div className={style.item}>*/}
                    {/*    <img src={sliderImage} alt="photo"/>*/}
                    {/*</div>*/}
                </Slider>
            </div>
        </>
    )
}