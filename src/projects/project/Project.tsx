import React from 'react';
import s from './Project.module.css'

type PropsType = {
    projectImage: { backgroundImage: string }
    name: string
    description: string
    href: string
}

const Project = ({projectImage, description, name, href}: PropsType) => {
    return (
        <div className={s.mainProjectBlock}>
            <a href={href}>
                <div style={{...projectImage}} className={s.projectBlock}>

                    <label className={s.viewRef}>{name}</label>
                </div>
            </a>
            <div className={s.infoBlock}>
                <h3 className={s.projectName}>{name}</h3>
                <p className={s.projectDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Project;