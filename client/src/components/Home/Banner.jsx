import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css';

const Banner = () => {
    const data = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/July/TBS/Updated/final/D-_2024_Unrec-Heros-July_Skincare-PC._CB567621255_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/July/Olympics/GW/Hero/Unrec/Updated/3000x1200_3._CB567762364_.png',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg'
    ];

    return (
        <div>
            <Carousel
                className='carousel'
                autoPlay={true}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        height: '100%',
                        marginTop: -190,
                        height: "104px"
                    }
                }}
            >
                {data.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt="" className='banner_img' />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;
