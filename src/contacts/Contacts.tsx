import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import {Title} from '../common/title/Title';

const Contacts = () => {
    return (
        <div className={s.contactsMainBlock}>
            <div className={`${styleContainer.container} ${s.contactsInnerBlock}`}>
                <Title title={'Contacts'}/>
                <form className={s.contactsForm}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textArea}/>
                </form>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Contacts;