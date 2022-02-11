import { Link } from 'react-router-dom';
import hardcore from './data';
import s from './Hardcore.module.css';

export default function OurTeam() {
    return (
        <div className={s.content}>
            <Link to="/" alt="homepage" className={s.close} />

            {hardcore.map((teammate, idx) => (
                <figure key={idx} className={s.snip1344}>
                    <img src={hardcore.photo} alt="" className={s.background} />
                    <img
                        src={hardcore.photo}
                        alt={hardcore.fullName}
                        className={s.profile}
                    />
                    <figcaption>
                        <h3>
                            {hardcore.fullName}
                            <span>{hardcore.position}</span>
                        </h3>
                        <div className={s.icons}>
                            <a href={hardcore.linkedIn}>
                                <i className="ion-social-linkedin-outline"></i>
                            </a>
                            <a href={hardcore.gitHub}>
                                <i className="ion-social-github-outline"></i>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}
