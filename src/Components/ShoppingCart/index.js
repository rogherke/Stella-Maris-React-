import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import imgIndex from '../../images';

import Shopping from './_shoppingItems';

import { useShopping } from '../../hooks'; 

import styles from './style.module.scss';

const ShoppingCart = () => {
  const { shoppingCartItem, setIsNeedUpload } = useShopping();
  const navigate = useNavigate();

  const toCurrency = (total) => {
    var string = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return string;
  }

  const totalPrice = () => {
    const itemTotal = shoppingCartItem.length > 0 ?  (shoppingCartItem.map((item) => (
      Number(item.amount) * Number(item.price)
    ))) : '0'; 

    const reducer  = (accumulator, curr) => accumulator + curr;

    const _totalPrince = itemTotal.reduce(reducer);

    return toCurrency(_totalPrince);
  } 

  const handleNumChange = (id, type, value) => {
    const _idx = shoppingCartItem.findIndex((el) => el.id === id);

    let _item = {};

    switch (type) {
      case 'add':
        _item = {
          ...shoppingCartItem[_idx],
          amount: Number(shoppingCartItem[_idx].amount) + 1,
        };
        break;
      case 'inc':
        _item = {
          ...shoppingCartItem[_idx],
          amount: Number(shoppingCartItem[_idx].amount) - 1,
        };
        break;
      case 'amount':
        _item = {
          ...shoppingCartItem[_idx],
          amount: Number(value),
        };
        break;  
      default:
    } 

    let _shoppingItems = shoppingCartItem;
    _shoppingItems[_idx] = _item;
    
    console.log(_shoppingItems)

    localStorage.setItem('shoppingGoods', JSON.stringify(_shoppingItems));
    setIsNeedUpload(true);
  }

  const handleRemove = (id) => {
    const _idx = shoppingCartItem.findIndex((el) => el.id === id);

    const _shoppingItems = shoppingCartItem.slice(_idx);

    localStorage.setItem('shoppingGoods', JSON.stringify(_shoppingItems));
    setIsNeedUpload(true);
  };

  return ( 
  <div className={styles.main}>
    <div className={styles.shoppingGuided}>
      <div className={styles.cartLogo}>
        <Link to="/">
          <img src={imgIndex.marisPastry} alt="" />
        </Link>
        <div className={styles.logoCart}>購物車</div>
      </div>
      <div className={styles.searchBar}>
        {/* <div className={styles.searchFrom}>
          <input 
            type="search" 
            className={styles.searchInput} 
            placeholder="請輸入關鍵字" 
            maxLength="20" 
            autoComplete="on" 
          />
          <button className={styles.searchBtn}>
           <img src={imgIndex.loupe} alt="" />
          </button>
        </div> */}
      </div>
    </div>
    <div className={styles.shoppingArea}>
      <div className={styles.shoppingGroup}>
        {
          shoppingCartItem.length > 0 && shoppingCartItem.map((item) => (
            <Shopping 
              {...item} 
              key={item.id} 
              handleNumChange={handleNumChange} 
              handleRemove={handleRemove} 
            /> 
          ))
        }
        <div className={styles.checkGroup}> 
          <div className={styles.checkCalculate}>
            <div className={styles.checkTotal}>總金額：{totalPrice()}</div>
          </div>
          <button className={styles.checkOut}  
            onClick={() => navigate("/checkOut")}>結帳
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ShoppingCart;