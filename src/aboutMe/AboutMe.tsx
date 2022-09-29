import React from 'react';
import s from '../main/Main.module.css';
import sContainer from '../common/styles/container/Container.module.css';

const AboutMe = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.generalInfo}>
                    <div>
                        <h2>
                            <hr/>
                            About me:
                        </h2>
                        <p>
                            I'm a developer with experience building SPAs using
                            JS/TS/React/Redux/TypeScript/HTML&CSS/SCSS and so on.
                            I like to develop applications that bring real value to the business & users.
                            Now I am improving my skills in this area and expanding my knowledge with new technologies.
                            I spend my free time reading educational literature,
                            as well as watch some technical videos about development & computer science.
                            Responsible, executive, punctual, quickly find a common language with people.
                        </p>
                    </div>
                    <div style={{marginBottom: '-100px'}}>
                        <hr/>
                        <ul className={s.persInfo}>
                            <li><p><span>Birthday:</span>20.07.1992</p></li>
                            <li><p><span>Age:</span>30</p></li>
                            <li><p><span>Location:</span>Tashkent</p></li>
                            <li><p><span>Email:</span>evgen.mj.tm@gmail.com</p></li>
                            <li><p><span>Phone:</span>+998-93-067-70-06</p></li>
                            <li><p><span>Study:</span>It-Incubator</p></li>
                            <li><p><span>Relative exp:</span>More then year</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;