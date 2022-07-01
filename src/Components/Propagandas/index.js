import React from 'react';

import introduction from '../../images/magazine-introduction.png';
import comment from '../../images/comment.png'; 
import propaganda from '../../images/propaganda.png'; 

import styles from './style.module.scss';

const Propagandas = () => (
    <>
    <div className={styles.propaganda}>
        <div className={styles.magazine}>
            <h3>媒體雜誌 熱烈介紹 ‧ 甜點界新星</h3>
            <img src={introduction} alt="#" />
        </div>
        <div className={styles.comment}>
            <h3>顧客評論</h3>
            <img src={comment} alt="#" />
        </div>
    </div>
    <div className={styles.publicity}>
        <div className={styles.boardImg}>
            <img src={propaganda} alt="#" />
        </div>
    </div>
    </>
);

export default Propagandas;