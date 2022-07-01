import React from 'react';

import cookie from '../../images/cookie.jpg'; 
import publicize from '../../images/propaganda3.png'; 

import styles from './style.module.scss';

const Special = () => (
    <>
    <div className={styles.serviceTitle}>
        <h2>STELLA MARIS
            <br/>特別服務
        </h2>
    </div>
    <div className={styles.specialService}>
        <div className={styles.serviceBoard}>
            <div className={styles.servicePic}>
                <img src={cookie} alt="" />
            </div>
            <div className={styles.serviceText}>
                <h1>幫你傳達所想的文字到甜點上，不論是在一年一度的生日，還是在重要的日子裡，都能幫你完成 一起享受STELLA MARIS吧。</h1>
                {/* <br />
                <p>“Happy Birthday”        .............................................................$123</p>
                <br />
                <p>“Happy Valentine's Day” ...................................................$456</p>
                <br />
                <p>“其他的話語 (限12字以內)” .............................................$789</p> */}
            </div>
        </div>
        <div className={styles.serviceAdditional}>
            {/* <p>進入結帳流程後，可以選取添加文字項目，並填寫想說的話。</p> */}
            <p>文字皆用特製低糖巧克力，僅有0.6g糖份。</p>
        </div>
    </div>
    <div className={styles.publicize}>
        <div className={styles.publiBoard}>
            <img src={publicize} alt="" />
        </div>
    </div>
    </>
);

export default Special;