import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import gitIcon from '../assets/icones/pngaaa.com-1100822.png'

const Footer = () => {
    return (
        <div className={s.pol}>
        <div className={s.footerMainBlock}>
            <div className={`${styleContainer.container} ${s.footerInnerBlock}`}>

                    <h3 className={s.myName}>Meleshkov Evgenii</h3>

                    <div className={s.someBlocks}>
                        <div className={s.someBlock}>
                            <img alt={'my github'} src={gitIcon}/>
                        </div>
                        <div className={s.someBlock}>
                            <img alt={'my github'} src={gitIcon}/>
                        </div>
                        <div className={s.someBlock}>
                            <img alt={'my github'} src={gitIcon}/>
                        </div>
                        <div className={s.someBlock}>
                            <img alt={'my github'} src={gitIcon}/>
                        </div>
                    </div>
                    <p className={s.footerInfo}>©2022 all rights protected</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;