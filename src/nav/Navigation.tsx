import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    const styleForLink = ({ isActive }: { isActive: boolean }) => (isActive ? s.navElementActive : s.navElement)
    return (
        <div className={s.mainNavDiv} >
            <ul className={s.nav}>
                <li><NavLink className={styleForLink} to={'/'} >Main</NavLink></li>
                <li><NavLink className={styleForLink} to={'/skills'} >Skills</NavLink></li>
                <li><NavLink className={styleForLink} to={'/projects'} >Projects</NavLink></li>
                <li><NavLink className={styleForLink} to={'/contacts'} >Contacts</NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;