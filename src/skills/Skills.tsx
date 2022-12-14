import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import Skill from './skill/Skill';
import {skills} from '../common/skills/skills';
import {Title} from '../common/title/Title';

const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    {skills.map(el => <Skill key={el.name} title={el.name} description={el.description} picture={el.picture}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;