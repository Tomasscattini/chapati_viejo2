import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const LogoStyled = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 5;
    a {
        img {
            height: 30px;
            &:hover {
                        filter: invert(20%);
                    }
        }
    }
`;

const Logo = () => {

    return (
        <LogoStyled>
           <HashLink to="/home#top"><img src="./images/chapatiblanco.png" alt="Logo Chapati" /></HashLink> 
        </LogoStyled>
    );
};

export default Logo;
