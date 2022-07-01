import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import imgIndex from '../../images';

import { useShopping } from '../../hooks'; 

import productDb from './Products.json'

import styles from './style.module.scss';

const Products = () => {
  const { addShoppingItemInLoal } = useShopping();
  const navigate = useNavigate();

  const CakeItem = (data) => {
    const handleCheckOut = () => {
        navigate(`/checkOut?id=${data.data.id}`);
    }
        
    return (    
    <div className={styles.listInner}>
      <div className={styles.cake}>
        <Link to="">
          <img className={styles.cakePic} src={imgIndex[`${data.data.img}`]} alt="#" />
        </Link>
        <h2>{data.data.name}</h2>
        <ul>
          <li>{data.data.sugar}</li>
          <li>{data.data.heat}</li>
        </ul>
        <div className={styles.cakeDescription}>
          <p>{data.data.cakeDescription}</p>
        </div>
        <div className={styles.cakePrice}>售價：999</div>
        <div className={styles.putinCart} onClick={() => addShoppingItemInLoal(data.data)}>
          <img src={imgIndex.shoppingCart} alt="" />放入購物車
        </div>
        <div className={styles.productBuy} onClick={handleCheckOut}>
          <img src={imgIndex.buyBag} alt="" />直接購買
        </div>
      </div>
    </div>
    )
  }
    
  return ( 
    <>
      <div className={styles.productTitle}>
        <div className={styles.titleText}>
          <h2>STELLA MARIS
            <br/>商品一覽
          </h2>
        </div>
        <div className={styles.productList}>
          <div className={styles.itemList}>
          { productDb.map((item) => <CakeItem data={item} key={item.id} /> )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;