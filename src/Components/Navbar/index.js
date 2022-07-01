import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import marisPastry from '../../images/logo_word.stella-maris-pastry.png'; 
// import iconFindeEat from '../../images/iconfinde_eat.png'; 
// import iconFinderContent from '../../images/iconfinder_content.png'; 
// import iconFinderAboutus from '../../images/iconfinder_aboutus.png'; 
import shoppingCart from '../../images/shopping_cart.png'; 

import styles from './style.module.scss';


const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav>
            <div className={styles.logoIcon}>
                <Link to="">
                    <img src={marisPastry} alt="" />
                </Link>
            </div>
            <div className={styles.hamburgerMenu} onClick={() =>setOpen(!isOpen)}>
                <input className={styles.checkBox} type="checkbox"></input>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                { isOpen && (
                <ul id={styles.menuToggle}>
                    <Link to="/shoppingCart">
                        <img src={shoppingCart} alt="" /><li>CART</li></Link>
                    {/* <Link to="#"><li>HOW TO EAT</li></Link>
                    <Link to="#"><li>CONTACT</li></Link>
                    <Link to="#"><li>ABOUT US</li></Link> */}
                </ul>
                )}
            </div>
            <ul className={styles.menu}>
                <li className={styles.shoppingCart}>
                    <Link to="/shoppingCart">
                    <img src={shoppingCart} alt="" />CART</Link>
                </li>
                {/* <li className={styles.toEat}>
                    <Link to="#">
                    <img src={iconFindeEat} alt="" />HOW TO EAT</Link>
                </li>
                <li className={styles.content}>
                    <Link to="#">
                    <img src={iconFinderContent} alt="" />CONTACT</Link>
                </li>
                <li className={styles.aboutus}>
                    <Link to="#">
                    <img src={iconFinderAboutus} alt="" />ABOUT US</Link>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;