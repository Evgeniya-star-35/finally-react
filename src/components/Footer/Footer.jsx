import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import copyright from '../../images/copyright.svg';
import heart from '../../images/favorite-heart-button.svg';
import separator from '../../images/separator.svg';

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
                <span>2022</span>
                <span className={s.separator}>
                    <img
                        src={separator}
                        alt="separator"
                        height="14px"
                        width="0"
                    ></img>
                </span>
                <span>All Rights Reserved</span>
                <span className={s.separator}>
                    <img
                        src={separator}
                        alt="separator"
                        height="14px"
                        width="0"
                    ></img>
                </span>
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
