import React, {useState} from 'react'
import style from './style.module.scss'
import Slider from "react-slick";
import {Backdrop, Fade, Modal} from "@material-ui/core";
import productPhoto from './assets/photo_2021-04-07_19-36-43.png'

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", transform: "scale(2) translateX(5px)"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", transform: "scale(2) translateX(-5px)"}}
            onClick={onClick}
        />
    );
}

export default function Product({data, productBasket, onRemove, onClickAddProducts}) {

    // let str = data.color;
    // let colorsData =  str ? '' : str.split(',');

    // const [color, setColor] = useState([])
    //
    // useEffect( () => {
    //
    //         setColor(data.color.split(','))
    //
    // }, [color])

    let images = []

    let imgs = [data.image, data.image2,data.image3,data.image4,data.image5,data.image6,data.image7,data.image8,data.image9,data.image10]

    for (let i = 0; imgs[i] !== null ; i++) {
        images.push(imgs[i])
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    let colors = []

    data.color.map(p => colors.push({id: p.id, color: p.color, count: 1}))


    const onAddProducts = () => {
        const obj = {
            id: data.id,
            title: data.title,
            price: +data.price,
            image: data.image,
            colors: colors,
            imgs: images,
            size: data.size,
            count: data.count,
            discription: data.discription
        };

        onClickAddProducts(obj);
    };

    const handleRemoveClick = () => {
        onRemove(data.id);
    };


    return (
        <>
            <div className={style.itemProduct}>
                <div className={style.captionItem}>
                    {data.available ? <div className={style.new}>Новинка</div> : ""}
                </div>
                <div className={style.productPhoto} onClick={() => setOpen(true)}>
                    <img src={data.image} alt="photo"/>
                </div>
                <div className={style.productTxt}>
                    <div className={style.name}>
                        <p>{data.title}</p>
                    </div>
                    <div className={style.size}>
                        <p>Размеры:</p>
                        {data.size.map((p, index) => <div key={index}> {p.size}.</div>)}
                    </div>
                    <div className={style.colors}>
                        Цвета:
                        {data.color.map((p, index) => <p key={index}> {p.color}, </p>)}
                    </div>
                    <div className={style.price}>
                        <p>{data.price} сом</p>
                    </div>
                    <div className={style.basketBtn}>
                        {productBasket
                            ? <button onClick={handleRemoveClick} className={productBasket && style.active}>Удалить
                                <svg width="22" height="20" viewBox="0 0 18 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.20325 12.3198C4.41685 12.2798 4.43166 11.1777 5.20322 11.1394C7.38881 11.147 13.1535 11.1414 15.4086 11.143C16.0254 11.143 16.5531 10.7248 16.6918 10.126L17.9723 4.6009C18.0457 4.28455 17.9717 3.95713 17.7693 3.70264C17.567 3.44815 17.2641 3.30014 16.9383 3.30014C16.0311 3.30014 8.33041 3.26541 4.38614 3.24974L3.7609 0.938181C3.61081 0.38578 3.10489 0 2.53056 0H0.527624C0.236235 0 0 0.235386 0 0.525729C0 0.816072 0.236235 1.05146 0.527624 1.05146H2.53056C2.62943 1.05146 2.71649 1.11788 2.7422 1.2124L5.14342 10.0894C4.72122 10.1046 4.32796 10.2758 4.02975 10.5772C3.71641 10.8941 3.54813 11.3135 3.55591 11.7582C3.57145 12.6476 4.31044 13.3712 5.20325 13.3712H5.9726C5.85825 13.6104 5.79405 13.8778 5.79405 14.1599C5.79405 15.1745 6.62249 16 7.64081 16C8.65912 16 9.48756 15.1745 9.48756 14.1599C9.48756 13.8778 9.42333 13.6104 9.30898 13.3712H12.6406C12.5264 13.6104 12.4622 13.8776 12.4622 14.1596C12.4622 15.1743 13.2906 15.9997 14.3089 15.9997C15.3272 15.9997 16.1557 15.1742 16.1557 14.1596C16.1557 13.8666 16.0863 13.5896 15.9635 13.3435C16.1723 13.2734 16.3229 13.0772 16.3229 12.8456C16.3229 12.5552 16.0866 12.3198 15.7952 12.3198H5.20325ZM8.43228 14.1599C8.43228 14.5948 8.07722 14.9486 7.64077 14.9486C7.20432 14.9486 6.84927 14.5948 6.84927 14.1599C6.84927 13.7253 7.20397 13.3716 7.6401 13.3713H7.64144C8.07757 13.3716 8.43228 13.7253 8.43228 14.1599ZM14.309 14.9483C13.8725 14.9483 13.5174 14.5945 13.5174 14.1596C13.5174 13.7291 13.8656 13.3782 14.2961 13.3713H14.3218C14.7524 13.3782 15.1005 13.7291 15.1005 14.1596C15.1005 14.5945 14.7454 14.9483 14.309 14.9483ZM16.9422 4.35545C16.9453 4.35938 16.9448 4.36124 16.9442 4.36425L16.4046 6.69235H14.5776L14.8887 4.34329L16.9341 4.35149C16.9372 4.35156 16.9391 4.35156 16.9422 4.35545ZM11.5025 10.0915V7.74381H13.3739L13.063 10.0915H11.5025ZM8.88614 10.0915L8.57266 7.74381H10.4473V10.0915H8.88614ZM6.45721 10.0915H6.45555C6.32695 10.0915 6.21365 10.005 6.1802 9.88192L5.60186 7.74381H7.50809L7.82157 10.0915H6.45721ZM8.43224 6.69239L8.11493 4.31613L10.4472 4.32549V6.69239H8.43224ZM11.5025 6.69239V4.32973L13.8248 4.33905L13.5132 6.69239H11.5025ZM7.0498 4.31182L7.36767 6.69235H5.31743L4.67092 4.30225L7.0498 4.31182ZM15.4086 10.0915H14.1273L14.4383 7.74381H16.1609L15.6636 9.88938C15.636 10.0084 15.5312 10.0915 15.4086 10.0915Z"
                                        fill="#ffffff"/>
                                </svg>
                            </button>
                            : <button onClick={onAddProducts}>Добавить
                                <svg width="20" height="18" viewBox="0 0 18 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.20325 12.3198C4.41685 12.2798 4.43166 11.1777 5.20322 11.1394C7.38881 11.147 13.1535 11.1414 15.4086 11.143C16.0254 11.143 16.5531 10.7248 16.6918 10.126L17.9723 4.6009C18.0457 4.28455 17.9717 3.95713 17.7693 3.70264C17.567 3.44815 17.2641 3.30014 16.9383 3.30014C16.0311 3.30014 8.33041 3.26541 4.38614 3.24974L3.7609 0.938181C3.61081 0.38578 3.10489 0 2.53056 0H0.527624C0.236235 0 0 0.235386 0 0.525729C0 0.816072 0.236235 1.05146 0.527624 1.05146H2.53056C2.62943 1.05146 2.71649 1.11788 2.7422 1.2124L5.14342 10.0894C4.72122 10.1046 4.32796 10.2758 4.02975 10.5772C3.71641 10.8941 3.54813 11.3135 3.55591 11.7582C3.57145 12.6476 4.31044 13.3712 5.20325 13.3712H5.9726C5.85825 13.6104 5.79405 13.8778 5.79405 14.1599C5.79405 15.1745 6.62249 16 7.64081 16C8.65912 16 9.48756 15.1745 9.48756 14.1599C9.48756 13.8778 9.42333 13.6104 9.30898 13.3712H12.6406C12.5264 13.6104 12.4622 13.8776 12.4622 14.1596C12.4622 15.1743 13.2906 15.9997 14.3089 15.9997C15.3272 15.9997 16.1557 15.1742 16.1557 14.1596C16.1557 13.8666 16.0863 13.5896 15.9635 13.3435C16.1723 13.2734 16.3229 13.0772 16.3229 12.8456C16.3229 12.5552 16.0866 12.3198 15.7952 12.3198H5.20325ZM8.43228 14.1599C8.43228 14.5948 8.07722 14.9486 7.64077 14.9486C7.20432 14.9486 6.84927 14.5948 6.84927 14.1599C6.84927 13.7253 7.20397 13.3716 7.6401 13.3713H7.64144C8.07757 13.3716 8.43228 13.7253 8.43228 14.1599ZM14.309 14.9483C13.8725 14.9483 13.5174 14.5945 13.5174 14.1596C13.5174 13.7291 13.8656 13.3782 14.2961 13.3713H14.3218C14.7524 13.3782 15.1005 13.7291 15.1005 14.1596C15.1005 14.5945 14.7454 14.9483 14.309 14.9483ZM16.9422 4.35545C16.9453 4.35938 16.9448 4.36124 16.9442 4.36425L16.4046 6.69235H14.5776L14.8887 4.34329L16.9341 4.35149C16.9372 4.35156 16.9391 4.35156 16.9422 4.35545ZM11.5025 10.0915V7.74381H13.3739L13.063 10.0915H11.5025ZM8.88614 10.0915L8.57266 7.74381H10.4473V10.0915H8.88614ZM6.45721 10.0915H6.45555C6.32695 10.0915 6.21365 10.005 6.1802 9.88192L5.60186 7.74381H7.50809L7.82157 10.0915H6.45721ZM8.43224 6.69239L8.11493 4.31613L10.4472 4.32549V6.69239H8.43224ZM11.5025 6.69239V4.32973L13.8248 4.33905L13.5132 6.69239H11.5025ZM7.0498 4.31182L7.36767 6.69235H5.31743L4.67092 4.30225L7.0498 4.31182ZM15.4086 10.0915H14.1273L14.4383 7.74381H16.1609L15.6636 9.88938C15.636 10.0084 15.5312 10.0915 15.4086 10.0915Z"
                                        fill="#494949"/>
                                </svg>
                            </button>
                        }
                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                className={style.modal1}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 100,
                }}
            >
                <Fade in={open}>
                    <div className={style.paper}>
                        <div className={style.modal}>
                            <div className={style.slider}>
                                <Slider{...settings}>
                                    {images.map((p, index) =>
                                        <div className={style.item} key={index}>
                                            <img src={p} alt="photo"/>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

