import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.nav}>
            <a href={''}>Main</a>
            <a href={''}>Skills</a>
            <a href={''}>Projects</a>
            <a href={''}>Contacts</a>
        </div>
    );
};

export default Navigation;