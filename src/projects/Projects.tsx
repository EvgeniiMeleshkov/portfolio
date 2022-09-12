import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/container/Container.module.css'
import Project from './project/Project';
import {Title} from '../common/title/Title';
import {projects} from '../common/projects/projects'

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={s.projects}>
                    {projects.map(el => <Project key={el.name} href={el.href} name={el.name} description={el.description} projectImage={el.background}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;