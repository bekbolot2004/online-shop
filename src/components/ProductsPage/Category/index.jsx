import React, {useState} from "react";
import style from './style.module.scss'
import {categoriesObj} from "./drawer-categoties";
import {Collapse} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom";
import icon from './assets/icon.svg'


const dialogs = categoriesObj
const Categories = ({data: {id, name, categories, urlCategory}, state, setState,}) => {
  const open = id === state

  return (
    <>
      <NavLink to={`/products/${urlCategory}`} style={{background: open ? "rgba(77, 35, 146, 0.16)" : ""}}
               className={style.category}>
        <div onClick={() => setState(open ? "" : id)} style={{color: "#8855DD"}}>
          <p>{name}</p>
          <ArrowForwardIosIcon className={style.icon_arrow}
                               style={{
                                 height: "15px",
                                 transition: "0.1s",
                                 transform: open ? "rotate(90deg)" : "rotate(0deg)",
                                 color: "#8855DD"
                               }}/>
        </div>
      </NavLink>
      <Collapse in={open}>
        <div className={style.subCategories}>
          {
            categories.map(c => (
              <NavLink to={`/products/${urlCategory}/${c.urlSubCategory}`} style={{color: "#8855DD"}}
                       className={`m-0`} key={c.id}
                       onClick={() => setState(open ? "" : "")}>{c.name}</NavLink>
            ))
          }
        </div>
      </Collapse>
    </>
  )
}

export default function CategoryProduct() {
  const [openCat, setOpenCat] = useState("")

  return (
    <>
      <div className={style.blockCategory}>
        <div className={style.caption} style={{background: "#8855DD"}} onClick={() => setOpenCat("")}>
          <NavLink to={"/"}>
            <img src={icon} alt="icon"/>
            <p>Все категории</p>
          </NavLink>
        </div>
        <div className={style.categories}>
          {dialogs.map(d => <Categories state={openCat} setState={setOpenCat} key={d.id} data={d}/>)}
        </div>
      </div>
    </>
  )
}