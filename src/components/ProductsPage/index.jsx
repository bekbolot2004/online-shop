import React from 'react'
import style from './style.module.scss'
import MainLayout from "../MainLayout";
import {productsObj} from "../../objs/productObj";
import Product from "./Product";
import {categoriesObj} from "../../objs/category";

export default function ProductsPage({computedMatch: {params: {category, subcategory}}}) {
  const categories = categoriesObj

  return (
    <>  
      <MainLayout>
        <div className={style.products}>
          {category ? (subcategory ? productsObj.filter(p => +p.category === +category)
              .filter(p => +p.subcategory === +subcategory)
              .map(p => <Product key={p.id} data={p}/>) : productsObj.filter(p => +p.category === +category).map(p =>
              <Product key={p.id} data={p}/>))
            : productsObj.map(p => <Product key={p.id} data={p}/>)}
        </div>
      </MainLayout>
    </>

  )
}