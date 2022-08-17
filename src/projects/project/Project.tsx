import React from 'react';
import s from './Project.module.css'
import projectImg from '../../assets/748566.jpg'

const Project = () => {
    return (
        <div className={s.projectBlock}>
            <img className={s.projectImage} src={projectImg} alt={'project img'}/>
            <h4 className={s.projectName}>name</h4>
            <p className={s.projectDescription}>description</p>
        </div>
    );
};

export default Project;