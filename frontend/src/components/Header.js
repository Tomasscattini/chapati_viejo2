import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const HeaderStyled = styled.header`
padding-top: 10vh;
box-sizing: border-box;
h1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #008B70;
    margin: 0;
    height: 25vh;
    padding: 0 20px;
    line-height: 1;
    span:nth-of-type(1) {
    align-self: flex-end;
    }
    span:nth-of-type(2) {
    align-self: center;
    margin-left: 10vw;
    }
    span:nth-of-type(3) {
    align-self: flex-start;
    margin-left: 10vw;
    }
}
#carousel {
    max-width: 90vw;
    margin: 70px auto;
}
`;

const Header = () => {
    return (
        <HeaderStyled>
        <h1><span>consciente</span><br/><span>colectivo</span><br/><span>sustentable</span></h1>
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
                  <img src="images/gallery/image01.jpg" alt="Foto de la galería" />    
              </div>
              <div>
                  <img src="images/gallery/image02.jpg" alt="Foto de la galería" />    
              </div>
              <div>
                  <img src="images/gallery/image03.jpg" alt="Foto de la galería" />    
              </div>
          </Carousel>
        </div>
      </HeaderStyled>
    );
};

export default Header;
