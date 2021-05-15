import React, {useEffect, useState} from 'react'
import style from './style.module.scss'
import * as yup from "yup";
import {useFormik} from "formik";
import axios from "axios";

const rewritingRequestData = (values) => {
    const prodArr = []
    values.forEach( p => {
        prodArr.push({qty: p.count, product: p.id})
    })
    return prodArr
}

// "http://192.168.0.39:8000/api/order/"

const submit = async (values) => {
    try {
        await fetch("http://192.168.0.39:8000/api/order/", {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(
                {...values}
            )
        }).then(res => {
            console.log(res)
        });
    } catch (e) {
        console.log("Sending error", e);
    }
}


export default function BasketForm({totalPrice}) {

    const validationSchema = yup.object({
        // name: yup.string("asdasdasd").required('*Обязательно'),
        // address: yup.string("asdasdasd").required('*Обязательно'),
        // phone: yup.number("asdasdasd").required('*Обязательно'),
    })


    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            city: "",
            address: "",
            postal_code: "",
            products: "Тут должны быть товары  уцацуа"
            // products: "rewritingRequestData(values.order_products)"
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            submit(values)
        }
    })

    let order_products = {}

    // let new_products = useEffect(
    //     basket.map(p => order_products.push([p.id,p.count]))
    // )



    return (
        <>
            <form onSubmit={formik.handleSubmit} className={style.form}>
                <div className={style.formInput}>
                    <input type={`first_name`} name={"first_name"} value={formik.values.first_name}
                           onChange={formik.handleChange}
                           placeholder="Имя"/>
                    {(formik.errors.name) && <p className={'error'}>{formik.errors.name}</p>}
                </div>
                <div className={style.formInput}>
                    <input type={`last_name`} name={"last_name"} value={formik.values.last_name}
                           onChange={formik.handleChange}
                           placeholder="Фамилия"/>
                    {(formik.errors.last_name) && <p className={'error'}>{formik.errors.last_name}</p>}
                </div>
                <div className={style.formInput}>
                    <input type={`phone`} name={"phone"} value={formik.values.phone} onChange={formik.handleChange}
                           placeholder="Номер телефона"/>
                    {(formik.errors.phone) && <p className={'error'}>{formik.errors.phone}</p>}
                </div>
                <div className={style.formInput}>
                    <input type={`email`} name={"email"} value={formik.values.email}
                           onChange={formik.handleChange}
                           placeholder="email"/>
                    {(formik.errors.email) && <p className={'error'}>{formik.errors.email}</p>}
                </div>
                <div className={style.formInput}>
                    <input type={`address`} name={"address"} value={formik.values.address}
                           onChange={formik.handleChange}
                           placeholder="address"/>
                    {(formik.errors.address) && <p className={'error'}>{formik.errors.address}</p>}
                </div>
                <div className={style.formInput}>
                    <input type={`city`} name={"city"} value={formik.values.city}
                           onChange={formik.handleChange}
                           placeholder="City"/>
                    {(formik.errors.city) && <p className={'error'}>{formik.errors.city}</p>}
                </div>
                <div className={style.formInput}>
                    <input type={`postal_code`} name={"postal_code"} value={formik.values.postal_code}
                           onChange={formik.handleChange}
                           placeholder="postal_code"/>
                    {(formik.errors.postal_code) && <p className={'error'}>{formik.errors.postal_code}</p>}
                </div>
                <div>
                    {totalPrice}
                </div>
                <div className={style.buttonSend}>
                    <button type="submit">Заказать</button>
                </div>
            </form>
        </>
    );
}

