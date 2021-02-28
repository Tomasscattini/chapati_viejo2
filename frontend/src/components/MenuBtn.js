import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyled = styled.div`
    position: fixed;
    bottom: 5vh;
    right: 10vw;
    width: 30px;
    height: 30px;
    z-index: 8;
    transition: all .3s ease;
    &:hover {
        transform: scale(1.3);
    }
    &:hover .sub-menu-btn {
        transform: scale(.7);
    }
    &>a {
        display: block;
        width: 100%;
        height: 100%;
    }
    .sub-menu-btn {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transition: all .3s ease;
    }
    .sub-menu-btn:nth-of-type(1) {
        background-color: black;
        left: 10px;
    }
    .sub-menu-btn:nth-of-type(2) {
        background-color: ${props=> props.theme.color.color2};
        left: 21px;
        top: 5px;
    }
    .sub-menu-btn:nth-of-type(3) {
        background-color: ${props=> props.theme.color.color3};
        left: 24px;
        top: 16px;
    }
    .sub-menu-btn:nth-of-type(4) {
        background-color: ${props=> props.theme.color.color4};
        left: 16px;
        top: 26px;
    }
    .sub-menu-btn:nth-of-type(5) {
        background-color: ${props=> props.theme.color.color5};
        left: 4px;
        top: 26px;
    }
    .sub-menu-btn:nth-of-type(6) {
        background-color: ${props=> props.theme.color.color6};
        left: -4px;
        top: 16px;
    }
    .sub-menu-btn:nth-of-type(7) {
        background-color: white;
        left: -1px;
        top: 5px;
    }
`;

const MenuBtn = () => {
    return (
        <ButtonStyled>
            <Link to="/menu">
                <div className="sub-menu-btn"></div>
                <div className="sub-menu-btn"></div>
                <div className="sub-menu-btn"></div>
                <div className="sub-menu-btn"></div>
                <div className="sub-menu-btn"></div>
                <div className="sub-menu-btn"></div>
                <div className="sub-menu-btn"></div>
            </Link>
        </ButtonStyled>
    );
};

export default MenuBtn;
