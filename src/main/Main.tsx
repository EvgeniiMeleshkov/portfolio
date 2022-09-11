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
                if (text.length === j ) {
                    setJ(0)
                    setI(1)
                }
            }
        }, Math.random()*300);
        return () => {
            clearInterval(index)
        }
    },)
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