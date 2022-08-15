import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/container/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footerMainBlock}>
            <div className={`${styleContainer.container} ${s.footerInnerBlock}`}>

                    <h3 className={s.myName}>Meleshkov Evgenii</h3>
                    <div className={s.someBlocks}>
                        <div className={s.someBlock}></div>
                        <div className={s.someBlock}></div>
                        <div className={s.someBlock}></div>
                        <div className={s.someBlock}></div>
                    </div>
                    <p className={s.footerInfo}>all rights protected</p>

            </div>
        </div>
    );
};

export default Footer;