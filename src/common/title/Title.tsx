import React from 'react';
import s from './Title.module.css';

type PropsType = {
    title: string
}

export const Title = ({title}: PropsType) => {
    return (
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    );
};
