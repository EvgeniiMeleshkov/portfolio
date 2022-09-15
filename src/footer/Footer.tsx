import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import linkedin from '../assets/icones/pnghut_linked-in-icon-linkedin-media-turquoise-electric-blue.png'
import github from '../assets/icones/pnghut_github-distributed-version-control-silhouette-github.png'

const Footer = () => {
    return (
        <div className={s.pol}>
            <div className={s.footerMainBlock}>
                <div className={`${styleContainer.container} ${s.footerInnerBlock}`}>

                    <h3 className={s.myName}>Meleshkov Evgenii</h3>

                    <div className={s.someBlocks}>
                        <div className={s.someBlock}>
                            <a href={'https://github.com/EvgeniiMeleshkov'}>
                                <img alt={'my github'}
                                     src={github}/>
                            </a>
                        </div>
                        <div className={s.someBlock}>
                            <a href={'https://t.me/@isProgrammer_true'}>
                                <img alt={'my telegram'}
                                     src={'https://i.pinimg.com/originals/6c/38/5d/6c385d1722eec2c5a10d2808d6ef6b96.png'}/>
                            </a>
                        </div>
                        <div className={s.someBlock}>
                            <a href={'https://www.linkedin.com/in/evgenii-meleshkov-b0b81024a/'}>
                                <img alt={'my linked in'}
                                     src={linkedin} />
                            </a>
                        </div>
                        <div className={s.someBlock}>
                            <a href={'https://vk.com/id19200667'}>
                                <img alt={'my vk'}
                                     src={'https://upload.wikimedia.org/wikipedia/commons/b/bc/VK_logo.svg'}/>
                            </a>
                        </div>
                        <div className={s.someBlock}>
                            <a href={'https://www.codewars.com/users/EvgeniiMeleshkov'}>
                                <img alt={'my code wars'}
                                     src={'https://assets-global.website-files.com/62462834c60df92621c6b5be/62462c29f3165b55ea6255ea_light-text-logo-vertical.svg'}/>
                            </a>
                        </div>
                    </div>
                    <p className={s.footerInfo}>©2022 all rights protected</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;