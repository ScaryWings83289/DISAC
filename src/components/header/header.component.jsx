import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import Logo from './../../assets/logo.png';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <img src={Logo} alt="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink to='/' onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {currentUser ? (
                hidden ? null : <CartDropdown />
            ) : (
                console.log('hello')
            )}
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);