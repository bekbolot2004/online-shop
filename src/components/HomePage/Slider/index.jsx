import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import style from './style.module.scss'
import './slider.scss'
import axios from "axios";
import {apiAdress} from "../../../api";
import sliderImage from './assets/Frame 4.png'


export default function SliderHome() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const apiUrl = `${apiAdress}/stock/`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setSlider(allPersons);
        });
    }, [setSlider]);

    return (
        <>
            <div className={style.slider}>
                <Slider{...settings}>
                    {/*{slider.map(p =>*/}
                    {/*    <div className={style.item}>*/}
                    {/*        <img src={p.image} alt="photo"/>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <div className={style.item}>
                        <img src={sliderImage} alt="photo"/>
                    </div>
                    <div className={style.item}>
                        <img src={sliderImage} alt="photo"/>
                    </div>
                    <div className={style.item}>
                        <img src={sliderImage} alt="photo"/>
                    </div>
                    <div className={style.item}>
                        <img src={sliderImage} alt="photo"/>
                    </div>
                </Slider>
            </div>
        </>

    )
}