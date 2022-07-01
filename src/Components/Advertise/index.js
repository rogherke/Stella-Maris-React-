import React, { useEffect } from 'react';
import cx from 'classnames';

import heartCake from '../../images/list-heart-cake.jpg'; 
import chocoMousse from '../../images/list-choco-mousse-thumb.jpg'; 
import blackChoco from '../../images/list-black-choco-cake.jpg'; 
import StrawberryCake from '../../images/list-Strawberry-cake.jpg'; 
import fullStella from '../../images/full_stella_maris.png'; 

import styles from './style.module.scss';

const Advertise = () => {

    var slideIndex = 0;

    const carousel = () => {
        var i;
        var slides = document.getElementsByClassName(styles.slideShow);

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 5000);
    }

    useEffect(() => {
        carousel();
    });

    return (
        <div className={styles.essential}>
            <div className={styles.storeBrand}>
                <div className={styles.storeLogo}>
                    <img src={fullStella} alt="" />
                </div>
            </div>
            <div className={styles.showArea}>
                <div className={styles.productShow}>
                    <img className={cx(styles.slideShow,styles.pulse)} src={heartCake} alt=""/>
                    <img className={cx(styles.slideShow,styles.pulse)} src={chocoMousse} alt=""/>
                    <img className={cx(styles.slideShow,styles.pulse)} src={blackChoco} alt=""/>
                    <img className={cx(styles.slideShow,styles.pulse)} src={StrawberryCake} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Advertise;