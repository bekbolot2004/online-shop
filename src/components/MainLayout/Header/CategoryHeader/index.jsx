import React, {useState} from 'react'
import style from './style.module.scss'
import {categoriesObj} from '../../../../objs/category'
import catalog from "../assets/catalog.svg";
import {NavLink} from "react-router-dom";

const Category = ({data}) => {
  const [open, setOpen] = useState(false)

  const SubCategory = ({data, category}) => {

    return(
      <div className={style.subCategory}>
        <NavLink exact to={`/products/${category}/${data.id}`}>{data.subcategory}</NavLink>
      </div>
    )
  }

  return(
    <div className={style.category} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <NavLink exact to={`/products/${data.id}`}>{data.category}</NavLink>
      <div className={style.subCategories} style={{display: open ? "block" : "none"}}>
        {data.subCategories.map(p => <SubCategory key={p.id} data={p} category={"1"}/>)}
      </div>
    </div>
  )
}


export default function CategoryHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={style.catalog} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <button>
          <img src={catalog} alt=""/>
          <p>Каталог</p>
        </button>
        <div className={style.modalCatalog} style={{display: open ? "block" : "none"}}>
          {categoriesObj.map(p => <Category key={p.id} data={p}/> )}
        </div>
      </div>
      <div className={style.close} style={{opacity: open ? "1" : "0", pointerEvents: open ? "1" : "none"}}/>
    </>
  )
}