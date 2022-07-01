import React from 'react';
import cx from 'classnames';

import imgIndex from '../../images';

import styles from './style.module.scss';

type Props = {
  shoppingItems: string,
  id: string,
  amount: string,
  name: string,
  price: string,
  delete: string,
  img: string,
  setShoppingItems: Function,
  handleRemove: Fuction,
  productBuy: Boolean,
}

const Shopping = (props:Props) => {
  const {
    amount,
    name,
    price,
    img,
    handleNumChange,
    id,
    handleRemove,
  } = props;

  const toCurrency = (total) => {
    var string = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return string;
  }

  return (
    <div className={styles.orderStatus}>
      <div className={styles.statusGroup}>
        <div className={styles.orderSpace}></div>
        <div className={styles.orderName}>名稱</div>
        <div className={styles.orderPrice}>價格</div>
        <div className={styles.orderAmount}>數量</div>
        <div className={styles.orderTotal}>總計</div>
        { !props.isCheckOut && <div className={styles.orderOperate}>操作</div>}
      </div>
      <div className={styles.orderDetail}>
        <img className={cx(styles.cakePic,{[styles.shoppPic]: props.isCheckOut })} src={imgIndex[`${img}`]} alt="#" />
        <div className={styles.cakeName}>{name}</div>
        <div className={styles.cakePrice}>{price}</div>
          <div className={styles.cakeAmount}>
          { props.productBuy ? amount : (
            <>
              <button onClick={() => handleNumChange(id,'inc')}>-</button>
              <input 
                className={styles.amount} 
                type="text" 
                value={amount}
                onChange={(e) => handleNumChange(id, 'amount', e.target.value)}
              />
              <button onClick={() => handleNumChange(id, 'add')}>+</button>
            </>
          )}
          </div>
        <div className={styles.cakeTotal}>{toCurrency(amount * price)}</div>
        { !props.isCheckOut && <div className={styles.cakeDelete} onClick={() => handleRemove(id)}>刪除</div>}
      </div>
    </div>
  )
};

export default Shopping;