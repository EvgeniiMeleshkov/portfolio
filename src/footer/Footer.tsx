import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/container/Container.module.css'

const Footer = () => {
    return (
        <div className={s.pol}>
        <div className={s.footerMainBlock}>
            <div className={`${styleContainer.container} ${s.footerInnerBlock}`}>

                    <h3 className={s.myName}>Meleshkov Evgenii</h3>

                    <div className={s.someBlocks}>
                        <div className={s.someBlock}>d</div>
                        <div className={s.someBlock}>q</div>
                        <div className={s.someBlock}>w</div>
                        <div className={s.someBlock}>f</div>
                    </div>
                    <p className={s.footerInfo}>©2022 all rights protected</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;