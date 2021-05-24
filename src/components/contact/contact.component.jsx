import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import EmailAlert from './../alert/alert.component';

const Contact = () => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [contactFormCredentials, setContactFormCredentials] = useState({ 
        name: '',
        email: '',
        message: '',
        mobile: '',
    });

    const closeDialog = () => setDialogIsOpen(false)

    const handleSubmit = event => {
        event.preventDefault();
        setDialogIsOpen(true);
        emailjs.send('disac_service','template_zwhx02f', contactFormCredentials, 'user_qvzSnJpuXLaZ2uvHQdBDY').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });
        setContactFormCredentials({
            name: '',
            email: '',
            message: '', 
            mobile: '',
        });
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setContactFormCredentials({ ...contactFormCredentials, [name]: value });
    };

    const header = 'Form submitted successfully!';
    const body = `We have received your message. Our sales team will get back to you as soon as possible.`;

    return (
        <form onSubmit={handleSubmit}>
            <FormInput 
                name='name'
                type='text'
                handleChange={handleChange}
                value={contactFormCredentials.name}
                label='Name'
                required
            />
            <FormInput 
                name='email'
                type='email'
                handleChange={handleChange}
                value={contactFormCredentials.email}
                label='Email'
                required
            />
            <FormInput 
                name='mobile'
                type='number'
                handleChange={handleChange}
                value={contactFormCredentials.mobile}
                label='Mobile'
                required
            />
            <FormInput 
                name='message'
                type='text'
                handleChange={handleChange}
                value={contactFormCredentials.message}
                label='Message'
                required
            />
            <CustomButton type='submit'>Send Message</CustomButton>
            <EmailAlert open={dialogIsOpen} onClose={closeDialog} header={header} body={body} />
        </form>
    );
}

export default Contact;