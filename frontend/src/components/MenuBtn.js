import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { Planet } from 'react-planet';

const ButtonStyled = styled.div`
    position: fixed;
    bottom: 10vh;
    right: 22vw;
    z-index: 8;
    .center-btn {
        position: relative;
        left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 25px;
        width: 38px;
        transition: all .4s ease;
        cursor: pointer;
        span {
            width: 100%;
            height: 8px;
            transition: all .4s ease;
            mix-blend-mode: multiply;
        }
        span:nth-of-type(1) {
            background-color: ${props=>props.theme.color.color3};
        }
        span:nth-of-type(2) {
            background-color: ${props=>props.theme.color.color6};
            transform: translate(-3px) rotate(-10deg);
        }
        span:nth-of-type(3) {
            background-color: ${props=>props.theme.color.color5};
        }
    }
    .sub-menu-btn {
        width: 20px;
        height: 10px;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.2);
        }
    }
    .chapati {
        background-color: ${props=> props.theme.color.color3}!important;
    }
    .nosotros {
        background-color: ${props=> props.theme.color.color2}!important;
    }
    .hacemos {
        background-color: ${props=> props.theme.color.color5}!important;
    }
    .voluntariados {
        background-color: ${props=> props.theme.color.color6}!important;
    }
    .tienda {
        background-color: ${props=> props.theme.color.bg}!important;
    }
    .contacto {
        background-color: ${props=> props.theme.color.color4}!important;
    }
`;

const MenuBtn = () => {
    return (
        <ButtonStyled>
            <Planet
                centerContent={
                    <div className="center-btn">
                <span></span><span></span><span></span>
            </div>
                }
                autoClose
                orbitRadius="50"
                dragablePlanet
                dragRadiusPlanet="10"
                rotation={45}
                bounceOnOpen
            >
                <HashLink to="/home#about"><div className="sub-menu-btn nosotros"></div></HashLink>
                <HashLink to="/home#works"><div className="sub-menu-btn hacemos"></div></HashLink>
                <HashLink to="/home#volunteerings"><div className="sub-menu-btn voluntariados"></div></HashLink>
                <HashLink to="/home#store"><div className="sub-menu-btn tienda"></div></HashLink>
                <HashLink to="/home#contact"><div className="sub-menu-btn contacto"></div></HashLink>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Planet>
        </ButtonStyled>
    );
};

export default MenuBtn;
