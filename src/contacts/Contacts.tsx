import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import {Title} from '../common/title/Title';
import {useFormik} from 'formik';
import emailjs from 'emailjs-com';


type FormikErrorsType = {
    firstName?: string
    email?: string
    message?: string
}
type FormDataType = {
    firstName: string
    lastName: string
    email: string
    message: string
}

const Contacts = () => {


    function sendEmail(e: any) {
       e.preventDefault()
        emailjs.sendForm('service_5zouc17', 'template_lwu9u6d', e.target, 'Fcy7fgHITPL0M0wnk')
            .then((result) => {
                console.log(result.text)
                console.log(e)

                //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });

    }


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorsType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Required'
            } else if (values.message.length < 2) {
                errors.message = 'Message should be longer then two symbols'
            }
            if (!values.firstName) {
                errors.firstName = 'Required'
            } else if (values.firstName.length < 2) {
                errors.firstName = 'Enter valid name'
            }
            return errors
        },
        onSubmit: values => {

        },
    });

    return (
        <div className={s.contactsMainBlock}>
            <div className={`${styleContainer.container} ${s.contactsInnerBlock}`}>
                <Title title={'Contacts'}/>
                <form onSubmit={sendEmail} style={{}} className={s.contactsForm}>
                    {formik.errors.firstName && formik.touched.firstName &&
                        <div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.firstName}</div>}
                    <input {...formik.getFieldProps('firstName')}
                           name={'firstName'} placeholder={'First name'} className={s.input}/>
                    <input{...formik.getFieldProps('lastName')}
                          name={'lastName'} placeholder={'Last name'} className={s.input}/>
                    {formik.errors.email && formik.touched.email &&
                        <div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.email}</div>}
                    <input{...formik.getFieldProps('email')}
                          name={'email'} placeholder={'Your email'} className={s.input}/>
                    {formik.errors.message && formik.touched.message &&
                        <div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.message}</div>}
                    <textarea{...formik.getFieldProps('message')}
                             name={'message'} className={s.textArea}/>
                    <button type={'submit'} className={s.submitButton}>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;