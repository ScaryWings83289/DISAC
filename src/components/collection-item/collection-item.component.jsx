import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

import { addItem } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

const CollectionItem = ({currentUser, item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer><FontAwesomeIcon icon={faRupeeSign} /> {price}</PriceContainer>
            </CollectionFooterContainer>
            {currentUser ? (
                <AddButton onClick={() => addItem(item)} inverted>
                    Add to cart
                </AddButton>
            ) : (
                null
            )} 
        </CollectionItemContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);