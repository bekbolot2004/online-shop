import React, {useState} from 'react'
import style from './style.module.scss'
import photo from './assets/photo.png'
import basket from './assets/basket.svg'

const Product = ({data}) => {
    const [size, setSize] = useState()
    const [color, setColor] = useState()

    const colors = {
        "red": "#E84D4D",
        "green" : "#21B11E",
        "yellow" : "#DDE100",
        "blue" : "#4DB0E8",
    }

    const priceDis = data.price / 100 * data.discount


    return (
        <div className={style.item}>
            <div className={style.captionItem}>
                {data.new ? <div className={style.new}>Новинка</div> : ""}
                {data.discount ? <div className={style.discount}>-{data.discount}%</div> : ""}
            </div>
            <div className={style.productPhoto}>
                <img src={photo} alt="photo"/>
            </div>
            <div className={style.name}>
                <p>{data.name}</p>
            </div>
            <div className={style.size}>
                {data.size.map(p => <button onClick={() => setSize(p)} style={{border: size === p && "1px solid #8855DD", background: size === p && "#8855DD", color: size === p && "#fff"}}>{p}</button>)}
            </div>
            <div className={style.colors}>
                {data.colors.map(c => <button onClick={() => setColor(c)} style={{border: color === c && "2px solid #8855DD", background: color === c && "#fff"}}><div style={{backgroundColor: colors[c]}}/></button>)}
            </div>
            <div className={style.price}>

                {data.discount ? <div><p className={style.discountPrice}>{data.price} сом</p><p>{priceDis} сом</p></div> : <p>{data.price} сом</p> }
            </div>
            <div className={style.basketBtn}>
                <button>В корзину <img src={basket} alt="basket"/></button>
            </div>
        </div>
    )
}

const productsObj = [
    {
        id: 1,
        name: "Женская куртка",
        img: "",
        size: ["s", 'm', 'l', 'xl'],
        colors: ['red', 'green', 'yellow', 'blue'],
        price: 1600,
        discount: 50,
        new: false,
    },
    {
        id: 2,
        name: "Женская куртка",
        img: "",
        size: ["s", 'm', 'l', 'xl'],
        colors: ['red', 'green', 'yellow', 'blue'],
        price: 1300,
        discount: 20,
        new: true,
    },
    {
        id: 3,
        name: "Женская куртка",
        img: "",
        size: ["s", 'm', 'l', 'xl'],
        colors: ['red', 'green', 'yellow', 'blue'],
        price: 1600,
        discount: 0,
        new: true,
    },
    {
        id: 4,
        name: "Женская куртка",
        img: "",
        size: ["s", 'm', 'l', 'xl'],
        colors: ['red', 'green', 'yellow', 'blue'],
        price: 1300,
        discount: 20,
        new: true,
    },
    {
        id: 5,
        name: "Женская куртка",
        img: "",
        size: ["s", 'm', 'l', 'xl'],
        colors: ['red', 'green', 'yellow', 'blue'],
        price: 1600,
        discount: 50,
        new: true,
    },
    {
        id: 6,
        name: "Женская куртка",
        img: "",
        size: ["s", 'm', 'l', 'xl'],
        colors: ['red', 'green', 'yellow', 'blue'],
        price: 1300,
        discount: 20,
        new: true,
    }
]

export default function NewProducts() {
    return (
        <>
            <h1>Новове поступление</h1>
            <div className={style.products}>
                {productsObj.map(p => <Product key={p.id} data={p}/>)}
            </div>
        </>

    )
}