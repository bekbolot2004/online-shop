import React from 'react'
import './index.css'
import {BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Home exact path={"/"}/>
                    <ProductsPage exact path={"/products"}/>
                </Switch>
            </BrowserRouter>
        </>

    );
}

export default App;
