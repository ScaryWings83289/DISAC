import React from 'react';
import Contact from './../../components/contact/contact.component.jsx';

import { TitleContainer, MapContainer, FormContainer } from './contactpage.styles';

const ContactPage = () => {
    return (
        <div>
            <TitleContainer>
                If you have any queries we are just a mail away. You can also get in touch with us through the contact form given below.
            </TitleContainer>
            <MapContainer>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13999.753778284392!2d77.09098035!3d28.6914879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1622783396926!5m2!1sen!2sin" allowFullScreen title='location' loading="lazy"></iframe>
                <FormContainer>
                    <Contact />
                </FormContainer>
            </MapContainer>
        </div>
    );
}

export default ContactPage;