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
    animation: welcome .5s ease;
    img {
        height: 300px;
        width: auto;
        animation: imageLeft .5s ease .5s;
    }

    @keyframes welcome {
        0% {
            background-color: #7fb6a2;
        }
        20% {
            background-color: #008b70;
        }
        40% {
            background-color: #c7604a;
        }
        60% {
            background-color: #8a6846;
        }
        80% {
            background-color: #e3c802;
        }
        100% {
            background-color: #6599cc;
        }
    }

    @keyframes imageLeft {
        from {
            transform: translateZ(0);
        } to {
            transform: translateZ(800px);
        }
    }
`;

const WelcomeAnimation = () => {
    return (
        <WelcomeStyled>
            <img src="./images/casa.png" alt="Casa de Chapati"/>
        </WelcomeStyled>
    );
};

export default WelcomeAnimation;
