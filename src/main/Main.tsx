import React, {useEffect, useState} from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/container/Container.module.css'
import myPhoto from '../assets/259FB511-57C1-4200-993F-A67B9457C595_1_201_a.jpeg'
import {Title} from '../common/title/Title';

const Main = () => {
    const text = 'Frontend developer '
    const [val, setVal] = useState('')
    let [i, setI] = useState(0)

    useEffect(() => {
        const index = setInterval(() => {
            const a = text.slice(0, i)
            setVal(a)
            setI(i++)
            if (i > text.length) return
            if (i === text.length) {
                setI(0)
            }
        }, 300);

        return () => {
            clearInterval(index)
        }
    })
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.photoFrame}>
                    <img alt="MyPhoto" src={myPhoto} className={s.photo}/>
                </div>
                <div className={s.greetings}>
                    <p>Hi There</p>
                    <h1>I`m Evgenii Meleshkov</h1>
                    <div className={s.title}>
                        <label>{val}</label>
                    </div>
                    <h2>
                        About me...
                    </h2>
                    <p>a;odpoaj sdpja poja podjvnpijr pihrt
                        vpiha piha cpiahr vpihjs parihv aspih
                        vars vapiha vpihar pivh asrpivh apishrv </p>
                </div>
            </div>

        </div>
    );
};

export default Main;