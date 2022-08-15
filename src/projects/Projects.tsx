import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h3 className={s.label}>My Projects</h3>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Projects;