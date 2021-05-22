import React, { useState } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import EmailAlert from './../alert/alert.component';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, cartItem, clearItem }) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IedF9SBiu3eSr05QOwdtqRRHO6OI4JGrs9KZpBoDdc4BemIMSzXmvek5WRr34YQ2b9oPU3Uouz6GJHYmjcpiuA900jC60FpQq';

    const closeDialog = () => setDialogIsOpen(false)

    const onToken = token => {
        console.log(token);
        cartItem.map((item) => {
            return clearItem(item);
        });
        setDialogIsOpen(true);
    }; 

    return (
        <div>
            <EmailAlert open={dialogIsOpen} onClose={closeDialog} />
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