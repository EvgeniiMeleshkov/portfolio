import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div className={s.label}>
                    <h2>My Projects</h2>
                </div>
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