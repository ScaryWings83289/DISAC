import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Footer from './../../components/footer/footer.component';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <div>
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalContainer>TOTAL: <FontAwesomeIcon icon={faRupeeSign} />{total}</TotalContainer>
            <StripeCheckoutButton price={total} cartItem={cartItems} />
        </CheckoutPageContainer>
        <Footer />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);