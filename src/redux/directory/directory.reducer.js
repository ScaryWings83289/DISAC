const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621171555/DISAC/6_cmpmys.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621171986/DISAC/7_tdikns.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621172547/DISAC/8_g5gwrk.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621172660/DISAC/9_rwxvwg.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621172869/DISAC/10_tfhofj.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;