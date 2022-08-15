import React from 'react';
import s from './Project.module.css'

const Project = () => {
    return (
        <div className={s.projectBlock}>
            <img className={s.projectImage} src={''} alt={''}/>
            <h4 className={s.projectName}>name</h4>
            <p className={s.projectDescription}>description</p>
        </div>
    );
};

export default Project;