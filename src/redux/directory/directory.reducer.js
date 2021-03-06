const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621238566/DISAC/6_xegu0o.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621239126/DISAC/7_d6pvam.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621239449/DISAC/8_ellmm7.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621240497/DISAC/9_zj7oml.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1621240622/DISAC/10_ya3mno.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        },
        {
            title: 'kids',
            imageUrl: 'https://res.cloudinary.com/scarywings83289/image/upload/v1622885711/DISAC/6_b6pp1y.jpg',
            size: 'large',
            id: 6,
            linkUrl: 'shop/kids'
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