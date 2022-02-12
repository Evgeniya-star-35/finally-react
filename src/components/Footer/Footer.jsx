import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import copyright from '../../images/copyright.svg';
import heart from '../../images/heart.png';

function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.footerBox}>
                <img
                    src={copyright}
                    alt="copyrightImage"
                    width="18"
                    height="18"
                    className={s.copyRight}
                />
                <span className={s.gap}>2022 |</span>
                <span className={s.gap}>All Rights Reserved |</span>
                Developed with
                <img
                    src={heart}
                    alt="heart"
                    width="16"
                    height="16"
                    className={s.heart}
                />
                <span>
                    by
                    <Link to="/developers" className={s.link}>
                        GoIT Students
                    </Link>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
