import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/container/Container.module.css'
import myPhoto from '../assets/IMG_0734.jpeg'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
            <div className={s.greetings}>
                    <span>Hi There</span>
                    <h1>I`m Evgenii Meleshkov</h1>
                    <p>Frontend developer</p>
                </div>
                <img alt={'My photo'} src={myPhoto} className={s.photo}/>
            </div>
        </div>
    );
};

export default Main;