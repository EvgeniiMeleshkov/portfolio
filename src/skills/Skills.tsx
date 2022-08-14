import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'JavaScript'}/>
                    <Skill title={'TS'} description={'TypeScript'}/>
                    <Skill title={'React'} description={'React & Redux'}/>
                    <Skill title={'HTML & CSS'} description={'How to meet ladies'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;