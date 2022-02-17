import React from 'react';
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
                    <p>
                        <a href="/developers" className={s.link}>
                            <svg viewBox="0 0 70 36">
                                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                            </svg>
                            by Hardcore
                        </a>
                    </p>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
