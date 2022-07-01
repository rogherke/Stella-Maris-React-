import React from 'react';
import { Link } from 'react-router-dom';

import fullStella from '../../images/full_stella_maris.png';
import line from '../../images/line.svg';
import fb from '../../images/fb.svg';
import tw from '../../images/tw.svg';

import styles from './style.module.scss';

const Contact = () => (
    <div className={styles.contactMethod}>
        <div className={styles.contactImg}>
            <img src={fullStella} alt="" />
        </div>
        <div className={styles.contactPhone}>
            <p>聯繫資訊 電話：02-94879455 / 傳真：02-6669477 / 郵件：Stella-Maris.com
            </p>
        </div>
        <div className={styles.shareCommunity}>
            <p>將美味分享出去</p>
            <Link to="#">
                <img src={line} alt="" />
            </Link>
            <Link to="#">
                <img src={fb} alt="" />
            </Link>
            <Link to="#">
                <img src={tw} alt="" />
            </Link>
        </div>
    </div>
);

export default Contact;