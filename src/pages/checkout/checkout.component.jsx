import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Cart } from '../../assets/cart.svg';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CartMessageContainer,
    CartContainer,
    TitleContainer,
    SubtitleContainer,
    CartDropdownButton,
    CheckoutContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, history, total }) => {
    return (
        <CheckoutPageContainer>
            {(cartItems.length === 0) ? 
                <CartMessageContainer>
                    <CartContainer>
                        <Cart className='cart' />
                    </CartContainer>
                    <TitleContainer>Your Cart is Empty</TitleContainer>
                    <SubtitleContainer>Add something to make me happy :)</SubtitleContainer>
                    <CartDropdownButton
                        onClick={() => {
                            history.push('/shop');
                        }}
                    >
                        CONTINUE SHOPPING
                    </CartDropdownButton>
                </CartMessageContainer>
                : 
                <CheckoutContainer>
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
                </CheckoutContainer>
            }        
        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);