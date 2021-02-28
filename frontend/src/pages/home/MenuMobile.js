import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const MenuStyled = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    box-sizing:  border-box;
    background-color: ${props=> props.theme.color.color1};
    z-index: 6;
    ul {
        padding: 0;
        margin: 0;
        .sub-menu {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh / 6);
            width: 100vw;
            font-family: ${props=>props.theme.font.secondary};
            font-size: 3rem;
        }
        .chapati {
            background-color: ${props => props.theme.color.color3};
        }
        .nosotros {
            background-color: ${props => props.theme.color.color2};
        }
        .hacemos {
            background-color: ${props => props.theme.color.color5};
        }
        .voluntariados {
            background-color: ${props => props.theme.color.color6};
        }
        .tienda {
            background-color: ${props => props.theme.color.bg};
        }
        .contacto {
            background-color: ${props => props.theme.color.color4};
        }
    }
`;

const MenuMobile = () => {
    return (
        <MenuStyled>
            <ul>
                <HashLink to="/home#about"><li className="sub-menu chapati">Chapati</li></HashLink>
                <HashLink to="/home#people"><li className="sub-menu nosotros">Nosotros</li></HashLink>
                <HashLink to="/home#works"><li className="sub-menu hacemos">Qué hacemos</li></HashLink>
                <HashLink to="/home#volunteerings"><li className="sub-menu voluntariados">Voluntariados</li></HashLink>
                <HashLink to="/home#store"><li className="sub-menu tienda">Tienda Consciente</li></HashLink>
                <HashLink to="/home#contact"><li className="sub-menu contacto">Contacto</li></HashLink>
            </ul>
        </MenuStyled>
    );
};

export default MenuMobile;
