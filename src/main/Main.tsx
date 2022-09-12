import React, {useEffect, useState} from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/container/Container.module.css'
import myPhoto from '../assets/259FB511-57C1-4200-993F-A67B9457C595_1_201_a.jpeg'

const Main = () => {
    const text = ['Frontend developer', 'React developer', 'JavaScript developer', 'ex iOS developer']
    const [val, setVal] = useState('')
    let [i, setI] = useState(1)
    let [j, setJ] = useState(0)

    useEffect(() => {

        const index = setInterval(() => {
            const a = text[j].slice(0, i + 1)
            setVal(a)
            setI(i++)
            if (i > text[j].length) {
                return
            }
            if (i === text[j].length) {
                setI(0)
                setJ(++j)
                console.log(j)
                if (text.length === j) {
                    setJ(0)
                    setI(1)
                }
            }
        }, Math.random() * 300);
        return () => {
            clearInterval(index)
        }
    },)
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.photoAndHi}>
                    <div className={s.photoFrame}>
                        <img alt="MyPhoto" src={myPhoto} className={s.photo}/>
                    </div>
                    <div className={s.greetings}>
                        <p>Hi There</p>
                        <h1>I`m Evgenii Meleshkov</h1>
                        <div className={s.title}>
                            <label>{val}</label>
                        </div>
                    </div>
                </div>
                    <div className={s.generalInfo}>
                        <div>
                            <h2><hr/>About me...</h2>
                            <p>
                                I'm a developer with experience building SPAs using JS/TS/React/Redux/TypeScript/HTML&CSS/SCSS and so on.
                                I like to develop applications that bring real value to the business & users.
                                Now I am improving my skills in this area and expanding my knowledge with new technologies.
                                I spend my free time reading educational literature,
                                as well as watch some technical videos about development & computer science.
                                Responsible, executive, punctual, quickly find a common language with people.
                            </p>
                        </div>
                        <div style={{marginBottom: '-100px'}}>
                            <hr/>
                            <ul className={s.persInfo}>
                                <li><p><span>Birthday:</span>20.07.1992</p></li>
                                <li><p><span>Age:</span>30</p></li>
                                <li><p><span>Location:</span>Moscow</p></li>
                                <li><p><span>Email:</span>evgen.mj.tm@gmail.com</p></li>
                                <li><p><span>Phone:</span>+79851903747</p></li>
                                <li><p><span>Study:</span>It-Incubator</p></li>
                                <li><p><span>Relative exp:</span>About one year</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Main;