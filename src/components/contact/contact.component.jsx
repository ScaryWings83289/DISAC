import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const Contact = () => {
    const [contactFormCredentials, setContactFormCredentials] = useState({ 
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleSubmit = event => {
        event.preventDefault();
        alert("Form submitted");
        console.log(contactFormCredentials);
        setContactFormCredentials({
            name: '',
            email: '',
            message: '', 
            subject: '',
        });
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setContactFormCredentials({ ...contactFormCredentials, [name]: value });
    };

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
                name='subject'
                type='text'
                handleChange={handleChange}
                value={contactFormCredentials.subject}
                label='Subject'
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
        </form>
    );
}

export default Contact;