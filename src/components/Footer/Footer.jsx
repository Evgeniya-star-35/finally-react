import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

export default function Footer() {
    return (
        <Footer className={s.footer}>
            <div className={s.footerHardcore}>
                <div className={s.page__footer}>
                    <p className={s.copyright}>
                        &copy; 2022 | All Rights Reserved |&nbsp;
                    </p>
                    <div className={s.developers}>
                        <p>Developed with</p>
                        <img
                            src="../../images/orange-heart.svg"
                            alt="иконка сердечка"
                            className={s.footer__image}
                        />
                        <NavLink to="/developers" className={s.teamModal}>
                            by GoIT Students
                        </NavLink>
                        {/* <p className={s.teamModal}>by GoIT Students</p> */}
                    </div>
                </div>
            </div>
        </Footer>
    );
}
