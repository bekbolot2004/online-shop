import React, {Component} from "react";
import Slider from "react-slick";
import styles from './style.module.scss'
import {photoesObj} from "../index";
import './style.scss'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", transform: "translateX(-30px)" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", transform: "translateX(30px)", zIndex: "100" }}
            onClick={onClick}
        />
    );
}

export default class SliderPhoto extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    className={styles.imgMain}
                >
                    {photoesObj.map(p => <div>
                        <img src={p.img} alt="photo"/>
                    </div>)}
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    infinite={false}
                    className={styles.imgs}
                    {...settings}
                >
                    {photoesObj.map(p => <div className={styles.img}>
                        <img src={p.img} alt="photo"/>
                    </div>)}
                </Slider>
            </>
        );
    }
}