import React from 'react';
import styled from 'styled-components';

const WelcomeStyled = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    animation: welcome 2s ease;
    img {
        height: 100px;
        width: auto;
        animation: imageBigger 2s steps(1,end), animImage .8s ease 1.2s;
    }

    @keyframes welcome {
        0% {
            background-color: ${props=>props.theme.color.color3};
        }
        19% {
            background-color: ${props=>props.theme.color.color3};
        }
        20% {
            background-color: ${props=>props.theme.color.color2};
        }
        39% {
            background-color: ${props=>props.theme.color.color2};
        }
        40% {
            background-color: ${props=>props.theme.color.color1};
        }
        59% {
            background-color: ${props=>props.theme.color.color1};
        }
        60% {
            background-color: ${props=>props.theme.color.color6};
        }
        80% {
            opacity: 1;
        }
        100% {
            background-color: ${props=>props.theme.color.color6};
            opacity: 0;
        }
    }

    @keyframes imageBigger {
        0% {
            height: 120px;
        }
        20% {
            height: 140px;
        }
        40% {
            height: 160px;
        }
        60% {
            height: 180px;
        } 
        100% {
            height: 180px;
        }
    }
    @keyframes animImage {
        0 %{
            transform: rotate(0);
        }
        100% {
            transform: rotate(678deg);
        }
    }
`;

const WelcomeAnimation = () => {
    return (
        <WelcomeStyled>
            <img src="./images/hojita.png" alt="Logo de Chapati"/>
        </WelcomeStyled>
    );
};

export default WelcomeAnimation;
