import React from 'react';
import styles from './style.module.scss';

const Bulletin = () => (
    <div className={styles.bulletin}>
        <div className={styles.pieceCake}>
            <div className={styles.board}>
                <h2>專門以健康低糖為概念 製作美麗甜點的 STELLA MARIS </h2>
                <br/>
                <h1>美味不受限制</h1>
                <br/>
                <div className={styles.boardText}>
                    <p>STELLA MARIS 是一家專門生產健康低糖糕點的商店。
                    <br/> 為了讓那些不吃甜食或是對健康上有所疑慮的人們，
                    <br/> 也能輕鬆享受到甜點的滋味，
                    <br/> 由甜點師們，努力研發所帶來的甜點，必定讓你深陷其中。
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Bulletin;