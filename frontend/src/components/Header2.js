import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const HeaderStyled = styled.header`
padding-top: 10vh;
box-sizing: border-box;
position: relative;
#carousel {
    max-width: 100vw;
    margin: 25vh auto 20vh auto;
}
small {
    display: block;
    text-align: right;
    margin-right: 10px;
}
.circle {
    position: absolute;
    top: 15vh;
    width: 60vw;
    height: auto;
    animation: rotate 12s linear infinite;
    z-index: 4;
    img {
        width: 100%;
    }
}

@keyframes rotate {
    from {
        transfrom: rotate(0);
    } to {
        transform: rotate(360deg);
    }
}
`;

const Header = () => {
    return (
        <HeaderStyled>
            <div className="circle">
                <img src="./images/circle.png" alt=""/>
            </div>
            <div id="carousel">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                swipeable={true}
                useKeyboardArrows={true}
            >
                <div>
                    <img src="images/gallery/image04.jpg" alt="Foto de la galería" />    
                </div>
                <div>
                    <img src="images/gallery/image05.png" alt="Foto de la galería" />    
                </div>
                <div>
                    <img src="images/gallery/image06.png" alt="Foto de la galería" />    
                </div>
            </Carousel>
            <small>Fotografías de China Romero</small>
            </div>
      </HeaderStyled>
    );
};

export default Header;
