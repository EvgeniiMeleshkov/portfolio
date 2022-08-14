import React from 'react';
import s from './Skill.module.css'
type SkillPropsType = {
    title: string
    description: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>

            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
};

export default Skill;