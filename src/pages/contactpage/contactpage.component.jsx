import React from 'react';
import Contact from './../../components/contact/contact.component.jsx';
import Footer from './../../components/footer/footer.component.jsx';

import { TitleContainer, MapContainer, FormContainer } from './contactpage.styles';

const ContactPage = () => {
    return (
        <div>
            <TitleContainer>
                If you have any queries we are just a mail away. You can also get in touch with us through the contact form given below.
            </TitleContainer>
            <MapContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13161.226859272567!2d77.09098035!3d28.6914879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e1!3m2!1sen!2sin!4v1620279649097!5m2!1sen!2sin" allowfullscreen="" loading="lazy" title="location"></iframe>
                <FormContainer>
                    <Contact />
                </FormContainer>
            </MapContainer>
            <Footer />
        </div>
    );
}

export default ContactPage;