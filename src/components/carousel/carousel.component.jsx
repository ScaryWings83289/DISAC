import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ImageContainer } from './carousel.styles';

const CarouselContainer = () => {
    //const imageList = {
    //    data: [
    //        {
    //            imageUrl: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/6/1e75385a-8741-4bd0-aa85-9ccd054068441620315261570-DK_Banner.jpg',
    //            id: 1,
    //        },
    //        {
    //            imageUrl: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/0b63b12d-1407-459b-821c-135e68ed1f7c1589191328933-dk-kids.jpg',
    //            id: 2,
    //        },
    //        {
    //            imageUrl: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/10/f66accad-df35-46a8-984c-4eabf1d7a3a61615355502789-SS21-DesktopMainLaunch-KidsPageBanner.jpg',
    //            id: 3,
    //        },
    //        {
    //            imageUrl: 'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/8a7e8a08-3a86-4dd7-827f-824168cc13771589191328983-dk-kids-masks.jpg',
    //            id: 4,
    //        }
    //    ]
    //};

    return (
        <Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <div>
                <ImageContainer src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/6/1e75385a-8741-4bd0-aa85-9ccd054068441620315261570-DK_Banner.jpg' />
            </div>
            <div>
                <ImageContainer src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/0b63b12d-1407-459b-821c-135e68ed1f7c1589191328933-dk-kids.jpg' />
            </div>
            <div>
                <ImageContainer src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/10/f66accad-df35-46a8-984c-4eabf1d7a3a61615355502789-SS21-DesktopMainLaunch-KidsPageBanner.jpg' />
            </div>
            <div>
                <ImageContainer src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/8a7e8a08-3a86-4dd7-827f-824168cc13771589191328983-dk-kids-masks.jpg' />
            </div>
        </Carousel>
    );
}

export default CarouselContainer;