import React, {useRef, useState} from 'react';
import s from './Contacts.module.css'
import styleContainer from '../common/styles/container/Container.module.css'
import {Title} from '../common/title/Title';
import {useFormik} from 'formik';
import emailjs from '@emailjs/browser';
import {isDisabled} from '@testing-library/user-event/dist/utils';
import CustomizedSnackbars from '../common/snackbar/SnackBar';


type FormikErrorsType = {
    user_name?: string
    user_email?: string
    message?: string
}
type FormDataType = {
    user_name: string
    user_email: string
    message: string
}

const Contacts = () => {

    const form = useRef<any>();
    const [disabled, setDisabled] = useState(false)
    const sendEmail = (e: FormDataType) => {
        setDisabled(true)
        emailjs.sendForm('service_5zouc17', 'template_0jjfus1', form.current, 'Fcy7fgHITPL0M0wnk')
            .then((result) => {
                console.log(result.text)
                setDisabled(false)
                // alert('Message sent')
            })
            .catch((error) => {
                alert(error.text);
            })
    };


    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorsType = {}
            if (!values.user_email) {
                errors.user_email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email.trim())) {
                errors.user_email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Required'
            } else if (values.message.length < 2) {
                errors.message = 'Message should be longer then two symbols'
            }
            if (!values.user_name) {
                errors.user_name = 'Required'
            } else if (values.user_name.length < 2) {
                errors.user_name = 'Enter valid name'
            }
            return errors
        },
        onSubmit: values => {
            sendEmail({user_name: values.user_name.trim(),
                user_email: values.user_email.trim(),
                message: values.message})
            formik.resetForm()
        },
    });



    return (
        <div className={s.contactsMainBlock}>

            <div className={`${styleContainer.container} ${s.contactsInnerBlock}`}>
                <Title title={'Contacts'}/>
                <CustomizedSnackbars flag={disabled} />
                <form ref={form} onSubmit={formik.handleSubmit} style={{}} className={s.contactsForm}>

                    <div className={s.formikErr}>
                        {formik.errors.user_name && formik.touched.user_name &&
                            <div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.user_name}</div>}
                    </div>

                    <input {...formik.getFieldProps('user_name')}
                           name="user_name" placeholder={'Your name'} className={s.input}/>

                    <div className={s.formikErr}>
                        {formik.errors.user_email && formik.touched.user_email &&
                            <div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.user_email}</div>}
                    </div>

                    <input{...formik.getFieldProps('user_email')}
                          name="user_email" placeholder={'Your email'} className={s.input}/>

                    <div className={s.formikErr}>
                        {formik.errors.message && formik.touched.message &&
                            <div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.message}</div>}
                    </div>


                    <textarea{...formik.getFieldProps('message')}
                             name="message" placeholder={''} className={s.textArea}/>

                    <button type={'submit'} value={'Send'}
                                  className={disabled ? s.disabled: s.submitButton}>
                        {disabled ? 'Sending...': 'Send it to me'}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Contacts;