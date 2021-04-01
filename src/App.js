import React from 'react'
import './index.css'
import {BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import BasketPage from "./components/BasketPage";
import ContactPage from "./components/ContactPage";
import PaymantPage from "./components/PaymantPage";


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Home exact path={"/"}/>
                    <ProductsPage exact path={"/products"}/>
                    <BasketPage exact path={"/basket"}/>
                    <ContactPage exact path={"/contact"}/>
                    <PaymantPage exact path={"/paymant"}/>
                </Switch>
            </BrowserRouter>
        </>

    );
}

export default App;
