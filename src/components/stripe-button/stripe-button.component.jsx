import React, { useState } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import emailjs from 'emailjs-com';
import EmailAlert from './../alert/alert.component';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, cartItem, clearItem }) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IedF9SBiu3eSr05QOwdtqRRHO6OI4JGrs9KZpBoDdc4BemIMSzXmvek5WRr34YQ2b9oPU3Uouz6GJHYmjcpiuA900jC60FpQq';

    const closeDialog = () => setDialogIsOpen(false);

    const onToken = token => {
        const email = token.email;
        const { name, address_line1, address_city, address_country, address_zip, brand, last4 }= token.card;
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const todayDate = `${month} ${day},${year}`;
        const orderSummary = {
            from_name: 'DISAC Pvt. Ltd.',
            to_name: name,
            reply_to: email,
            date: todayDate,
            productName: cartItem[0].name,
            productPrice: cartItem[0].price,
            productQuantity: cartItem[0].quantity,
            address: address_line1,
            city: address_city,
            country: address_country,
            zip: address_zip,
            cardType: brand,
            last4,
        };
        emailjs.send('disac_service','template_hr32h83', orderSummary, 'user_qvzSnJpuXLaZ2uvHQdBDY').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((err) => {
                console.log('FAILED...', err);
        });
        cartItem.map((item) => {
            return clearItem(item);
        });
        setDialogIsOpen(true);
    }; 

    const header = 'Payment successful!';
    const body = `An email has been sent with the details of your purchase alongwith a receipt.`;

    return (
        <div>
            <EmailAlert open={dialogIsOpen} onClose={closeDialog} header={header} body={body} />
            <StripeCheckout
                label='Pay Now'
                name='DISAC Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://res.cloudinary.com/scarywings83289/image/upload/v1619760229/blogs/stripe-logo_pb2sx0.png'
                description={`Your total is ₹${price}`}
                amount={priceForStripe}
                currency="INR"
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);