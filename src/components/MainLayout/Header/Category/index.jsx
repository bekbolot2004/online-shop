import React, {useState} from 'react'
import style from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import arrow from './assets/Vector.svg'
import {fetchCategory} from "../../../../redux/actions/category";

export default function HeaderCategory({onClickCategory}) {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()


    const categories = useSelector(({category}) => category.items);

    React.useEffect(() => {
        dispatch(fetchCategory());
    }, []);

    return (
        <div className={style.categoryLink} onMouseLeave={() => setOpen(false)}>
            <a
                onMouseEnter={() => setOpen(true)}
            >Категории <img src={arrow} alt="arrow"/></a>

            {open &&
            <div className={style.categoryPopup}>
                {categories.map(p =>
                    <div>
                        <NavLink exact to={`/products/${p.id}`}>{p.name}</NavLink>
                    </div>)}

            </div>}
        </div>

    )
}