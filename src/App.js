import React from 'react'
import './index.css'
import {BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import BasketPage from "./components/BasketPage";
import ContactPage from "./components/ContactPage";
import PaymantPage from "./components/PaymantPage";
import ScrollUpButton from "react-scroll-up-button";


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Home exact path={"/"}/>
                    <ProductsPage exact path={"/products"}/>
                    <ProductsPage exact path={"/products/:category"}/>
                    <BasketPage exact path={"/basket"}/>
                    <ContactPage exact path={"/contact"}/>
                    <PaymantPage exact path={"/paymant"}/>
                </Switch>
            </BrowserRouter>
            <ScrollUpButton
                ContainerClassName="AnyClassForContainer"
                TransitionClassName="AnyClassForTransition"
                style={{
                    background: "#f1b8c4",
                    borderRadius: "10px",
                    height: "30px",
                    width: "30px",
                    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.15)",
                    border: "1px solid rgba(255,255,255, 0.5)"
                }}
            >
            </ScrollUpButton>
        </>
    );
}

export default App;
