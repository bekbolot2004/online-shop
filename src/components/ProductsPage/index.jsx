import React, {useEffect} from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from '../../redux/actions/products'
import {removeCartItem} from "../../redux/actions/cart";
import {fetchCategory} from "../../redux/actions/category";
import {NavLink} from "react-router-dom";

export default function ProductsPage({computedMatch: {params: {category, id, subcategory}}}) {
    const dispatch = useDispatch();

    const items = useSelector(({products}) => products.items);
    const categories = useSelector(({category}) => category.items);

    useEffect(() => {

    }, [category])

    React.useEffect(() => {
        dispatch(fetchProducts(category));
        dispatch(fetchCategory());
    }, [category]);

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

    if(items === []){
        console.log(items)
    }

    return (
        <>
            <MainLayout>
                <div className={style.products}>
                    {/*<CategoryProduct/>*/}
                    <div className={style.categories}>
                        <div className={category === undefined && style.active}>
                            <NavLink exact to={`/products/`}>Все</NavLink>
                        </div>
                        {categories.map(p =>
                            <div className={+category === p.id && style.active}>
                                <NavLink exact to={`/products/${p.id}`}>{p.name}</NavLink>
                            </div>)}
                    </div>
                    <div>
                        <h1>Товары</h1>
                        <div className={style.productsRow}>
                            {items.length !== 0 ?
                                items.map(p => <Product
                                    key={p.id}
                                    data={p}
                                    onRemove={onRemoveItem}
                                    productBasket={cartItems[p.id] && cartItems[p.id].items.length}
                                    onClickAddProducts={handleAddProductsToCart}/>)
                                :
                                <div>
                                    <h1>Товаров нету</h1>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>

    )
}