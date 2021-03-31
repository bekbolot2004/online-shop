import React from 'react'
import './index.css'
import {BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/HomePage";


function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Home/>
                </Switch>
            </BrowserRouter>
        </>

    );
}

export default App;
