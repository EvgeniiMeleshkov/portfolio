import React from 'react';
import s from './Project.module.css'

type PropsType = {
    projectImage: { backgroundImage: string }
    name: string
    description: string
}

const Project = ({projectImage, description, name}: PropsType) => {
    return (
        <div className={s.mainProjectBlock}>
            <div style={{...projectImage}} className={s.projectBlock}>
                    <label className={s.viewRef}>{name}</label>
            </div>
            <div className={s.infoBlock}>
                <h3 className={s.projectName}>{name}</h3>
                <p className={s.projectDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Project;