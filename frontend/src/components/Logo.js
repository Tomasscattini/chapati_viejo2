import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const LogoStyled = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 5;
    img {
        height: 40px;
    }
`;

const Logo = () => {
    const [ logo, setLogo ] = useState("./images/chapatinegro.png");

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > window.innerHeight - 200) {
                setLogo("./images/chapatiblanco.png")
            } else {
                setLogo("./images/chapatinegro.png")
            }
        });
        return () => {
            window.removeEventListener('scroll', ()=>{})
        };
    }, []);

    return (
        <LogoStyled>
           <HashLink to="#top"><img src={logo} alt="Logo Chapati" /></HashLink> 
        </LogoStyled>
    );
};

export default Logo;
