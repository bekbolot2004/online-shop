import React from 'react'
import style from './style.module.scss'
import MainLayout from "../../MainLayout";
import {productsObj} from "../../../objs/productObj";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import photo1 from './assets/photo_2021-04-07_19-36-37.jpg'
import photo2 from './assets/photo_2021-04-07_19-36-40.jpg'
import photo3 from './assets/photo_2021-04-07_19-36-41.jpg'
import photo4 from './assets/photo_2021-04-07_19-36-43.jpg'
import photo5 from './assets/photo_2021-04-07_19-36-45.jpg'
import photo6 from './assets/photo_2021-04-07_19-36-46.jpg'
import {makeStyles} from "@material-ui/styles";
import {Backdrop} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ProductPage({computedMatch: {params: {id}}}) {
  const products = productsObj
  const product = products.find(p => p.id === +id)
  console.log(product)

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainLayout>
        <div className={style.productPage}>
          <div className={style.photoImgs}>
            <div className={style.imgMain} onClick={handleOpen}>
              <img src={photo1} alt="photo"/>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                  </div>
                </Fade>
              </Modal>
            </div>
            <div className={style.imgs}>
              <div className={style.img}>
                <img src={photo2} alt="photo"/>
              </div>
              <div className={style.img}>
                <img src={photo3} alt="photo"/>
              </div>
              <div className={style.img}>
                <img src={photo4} alt="photo"/>
              </div>
              <div className={style.img}>
                <img src={photo5} alt="photo"/>
              </div>
              <div className={style.img}>
                <img src={photo6} alt="photo"/>
              </div>
            </div>
          </div>
          <div className={style.productTxt}>
            <p>{product.name}</p>
            <p>Цена: {product.price}</p>
            <p>Скидка: -{product.discount}%</p>
            <p>Размеры: {product.size.map(p => <>{p}, </>)}</p>
            <p>Цвета: {product.colors.map(p => <>{p}, </>)}</p>
            <p>Размеры: {product.new ? "Новый" : ""}</p>
          </div>
        </div>


      </MainLayout>
    </>

  )
}