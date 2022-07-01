import React, { useEffect, useState } from 'react';

import { useNavigate, useSearchParams, useParams } from 'react-router-dom';

import imgIndex from '../../images';

import Shopping from '../ShoppingCart/_shoppingItems';

import { useShopping } from '../../hooks'; 

import productDb from '../Products/Products.json'

import styles from './style.module.scss';

const defaultValue = {
  name: '',
  cardNo: '',
  date: '',
  cvn: '',
  user: '',
  phone: '',
  address: '',
}

const CheckOut = () => {
  const { shoppingCartItem } = useShopping();
  const [searchParams] = useSearchParams();
  const [isCheck, setCheck] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isDirty, setDirty] = useState(false);
  const [isNoError, setIsError] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const id = searchParams.get('id');

  const checkItem = id && productDb[productDb.findIndex((el) => el.id === id)];
  
  const toCurrency = (total) => {
    var string = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return string;
  }

  const totalPrice = () => {
    const itemTotal =  shoppingCartItem.length > 0 ? shoppingCartItem.map((item) => (
      Number(item.amount) * Number(item.price)
    )) : 0;

    const reducer  = (accumulator, curr) => accumulator + curr;

    const _totalPrince = itemTotal && itemTotal.reduce(reducer);

    return _totalPrince;
  } 

  const handleChange = (val, label, type) => {
    if (type === "number" ) {
      val = val.replace(/[^\d]/g, '');
      setValue({ ...value, [label]: val });
    } else {
      setValue({ ...value, [label]: val });
    } 
  }

  const verify = async () => {
    setError({
      ...error,
      name: isCheck ? (value.name ? '': '請填寫持卡人名字') : '',
      cardNo: isCheck ? (value.cardNo ? '': '請填寫信用卡卡號') : '',
      date: isCheck ? (value.date ? '': '請填寫到期日') : '',
      cvn: isCheck ? (value.cvn ? '': '請填寫安全驗證碼') : '',
      user: value.user ? '': '請填寫姓名',
      phone: value.phone ? '': '請填寫電話',
      address: value.address ? '': '請填寫地址',
    })

    setDirty(true);
    setOpen(true);
  }

  useEffect(() =>{
    const errorCheck = () => {
      const errorKey = Object.keys(error).map(key => error[key]);
      const noError = errorKey.every((val) => val === '');

      noError && isDirty ? setIsError(true) : setIsError(false);
    }
  
    errorCheck();

  }, [error, isDirty]);

  return ( 
  <div className={styles.main}>
    <div className={styles.checkOutGuided}>
      <div className={styles.checkOutLogo}>
        <img src={imgIndex.marisPastry} alt="" onClick={() => navigate("/")} />
        <div className={styles.logoCheckOut}>結帳</div>
      </div>
      <div className={styles.searchBar}>
      </div>
    </div>
    <div className={styles.checkOutArea}>
      <div className={styles.checkOutGroup}>
        <div className={styles.checkOutStatus}>
        { id ? (
            <Shopping item={checkItem} key={checkItem.id} productBuy isCheckOut />
          ) : (
            shoppingCartItem.length > 0 && shoppingCartItem.map((item) => (
              <Shopping {...item} key={item.id} productBuy isCheckOut /> 
            ))
          )
        }
        </div>
        <div className={styles.checkOutStatus}>
          <div className={styles.checkOuTh}>配送方式：</div>
          <p>因需冷凍保存，故只提供低溫宅配到府的方式，每筆訂單運費200元整。</p>
          <p>請食用前再將本產品擺放在冰箱冷藏庫內解凍，並於2日內食用完畢。冷凍（-18℃以下）可保存10日，冷藏（10℃以下）可保存5日。</p>
        </div>

        <div className={styles.checkOutStatus}>
          <div className={styles.checkOuTh}>付款方式：</div>
          <div className={styles.statusGroup}> 
            <div className={styles.checkOutPay}>
              <input type="radio" id="cash" name="radio" value="cash" onClick={() => setCheck(false)} />
              <label for="cash">貨到付款</label>
            </div>
            <div className={styles.checkOutPay}>
              <input type="radio" id="credit" name="radio" value="credit" onClick={() => setCheck(true)} />
              <label for="credit">信用卡線上刷卡</label>
            </div>
          </div>
          <p>信用卡授權成功後，本系統不會存留該刷卡人信用卡相關資料。</p>

          { isCheck && (
          <div className={styles.creditStatus}>
            <div className={styles.checkOuTh}>信用卡資訊：</div> 
            <div className={styles.statusGroup}>
              <div className={styles.creditTitle}>
                <span>持卡人姓名：</span>
                <input 
                  className={styles.creditInp} 
                  type="text" 
                  maxLength={30}
                  value={value.name} 
                  onChange={e => handleChange(e.target.value, 'name',)}
                  >
                </input>
                <span className={styles.caution}>{error.name}</span>
              </div>
              <div className={styles.creditTitle}>
                <span>信用卡卡號：</span>
                <input 
                  className={styles.creditInp} 
                  type="text" 
                  maxLength={16}
                  value={value.cardNo} 
                  onChange={e => handleChange(e.target.value, 'cardNo', 'number')}>
                </input>
                <span className={styles.caution}>{error.cardNo}</span>
              </div>
              <div className={styles.creditTitle}>
                <span>到期日(MMYY)：</span>
                <input 
                  className={styles.creditInp} 
                  type="text"
                  maxLength={4} 
                  value={value.date} 
                  onChange={e => handleChange(e.target.value, 'date', 'number')}>
                </input>
                <span className={styles.caution}>{error.date}</span>
              </div>
              <div className={styles.creditTitle}>
                <span>安全驗證碼：</span>
                <input 
                  className={styles.creditInp} 
                  type="text" 
                  maxLength={3}
                  value={value.cvn} 
                  onChange={e => handleChange(e.target.value, 'cvn', 'number')}>
                </input>
                <span className={styles.caution}>{error.cvn}</span>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className={styles.checkOutStatus}>
          <div className={styles.checkOuTh}>訂購人資訊：</div>
          <div className={styles.statusGroup}>
            <div>
              <span>姓名：</span>
              <input 
                className={styles.statusInp} 
                type="text"
                maxLength={30}
                value={value.user} 
                onChange={e => handleChange(e.target.value, 'user')}
                >
              </input>
              <span className={styles.caution}>{error.user}</span>
            </div>
            <div>
              <span>手機：</span>
              <input 
                className={styles.statusInp} 
                type="text" 
                maxLength={10}
                value={value.phone} 
                onChange={e => handleChange(e.target.value, 'phone', 'number')}
                >
              </input>
              <span className={styles.caution}>{error.phone}</span>
            </div>
            <div>
              <span>地址：</span>
                <input 
                  className={styles.statusInp} 
                  type="text"
                  maxLength={50}
                  value={value.address} 
                  onChange={e => handleChange(e.target.value, 'address')}
                  >
              </input>
              <span className={styles.caution}>{error.address}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.checkOutCalculate}>
          <div className={styles.checkOutTotal}>運費：200</div>
          <div className={styles.checkOutTotal}>總金額：{toCurrency(totalPrice() + 200)}</div>
          <button className={styles.checkOut} 
          onClick={() => verify()}>確認
          </button>
        </div>
      </div>
    </div>

    { isOpen && isNoError && (
      <div className={styles.formGroup}>
        <div className={styles.formOverlay}>
          <label for="completed">訂單已完成</label>
          <button type="button" className={styles.close} 
          onClick={() => navigate("/")}>確認
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default CheckOut;