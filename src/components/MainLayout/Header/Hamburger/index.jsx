import React, {useState} from 'react'
import style from './style.module.scss'
import catalog from '../assets/catalog.svg'


export default function HeaderHamburger() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={style.catalog}>
                <button onClick={() => setOpen(!open)}>
                    <img src={catalog} alt=""/>
                    <p>Каталог</p>
                </button>
                <div className={style.hamburger} style={{display: open ? "block" : "none"}}>
                    <div>
                        <p>Женские одежды</p>
                    </div>
                    <div>
                        <p>Женские одежды</p>
                    </div>
                    <div>
                        <p>Женские одежды</p>
                    </div>
                    <div>
                        <p>Женские одежды</p>
                    </div>
                    <div>
                        <p>Женские одежды</p>
                    </div>
                    <div>
                        <p>Женские одежды</p>
                    </div>
                </div>
                <div className={style.close} onClick={() => setOpen(false)} style={{display: open ? "block" : "none"}}>
                    <div/>
                </div>
            </div>

        </>

    )
}