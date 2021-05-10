import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IedF9SBiu3eSr05QOwdtqRRHO6OI4JGrs9KZpBoDdc4BemIMSzXmvek5WRr34YQ2b9oPU3Uouz6GJHYmjcpiuA900jC60FpQq';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
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
    );
};

export default StripeCheckoutButton;