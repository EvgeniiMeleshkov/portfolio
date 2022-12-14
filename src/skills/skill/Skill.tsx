import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    picture: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>

            <div className={s.skillTextContainer}>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <div className={s.picture}>
                <img alt={'skill'} src={props.picture}/>
            </div>
            </div>

                <p className={s.description}>{props.description}</p>

        </div>
    );
};

export default Skill;