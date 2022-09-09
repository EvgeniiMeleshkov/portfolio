import React from 'react';
import s from './Skill.module.css'
import tigerSamurai from '../../assets/1030031.jpg'

type SkillPropsType = {
    title: string
    description: string
    picture: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.picture} >
                <img alt={'skill'} src={props.picture}/>
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
};

export default Skill;