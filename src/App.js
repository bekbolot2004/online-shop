import React from 'react'
import './index.css'
import {BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import BasketPage from "./components/BasketPage";
import ContactPage from "./components/ContactPage";
import PaymantPage from "./components/PaymantPage";
import ProductPage from "./components/ProductsPage/ProductPage";


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Home exact path={"/"}/>
                    <ProductsPage exact path={"/products"}/>
                    <ProductsPage exact path={"/products/:category"}/>
                    <ProductsPage exact path={"/products/:category/:subcategory"}/>
                    <BasketPage exact path={"/basket"}/>
                    <ContactPage exact path={"/contact"}/>
                    <PaymantPage exact path={"/paymant"}/>
                    <ProductPage exact path={"/product-page/:id"}/>
                </Switch>
            </BrowserRouter>
        </>

    );
}

export default App;
