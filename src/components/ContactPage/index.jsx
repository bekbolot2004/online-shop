import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";


export default function ContactPage() {
    return (
        <MainLayout>
            <div className={style.contact}>
                <h1>+996(709) 91-54-94</h1>
                <h1>+996(709) 91-54-94</h1>
                <p>Адресс: Кыргызстан Бишкек</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.73014084234!2d74.52182133381717!3d42.87697950372108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sky!2skg!4v1620200513819!5m2!1sky!2skg"
                     style={{border: "0"}} allowFullScreen="" loading="lazy"/>
            </div>
        </MainLayout>
    )
}