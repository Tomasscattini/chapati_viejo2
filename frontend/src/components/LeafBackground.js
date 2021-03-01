import React from 'react';
import styled from 'styled-components';

const LeavesStyled = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 7;
    width: 100vw;
    height: 100%;
    img {
        position: relative;
        margin: 1vw;
        height: 70px;
        width: auto;
        animation: fall 10s infinite linear;
    }
    img:nth-of-type(1) {
        top: -5vh;
        left: -10vw;
        transform: rotate(-20deg);
    }
    img:nth-of-type(2) {
        top: 5vh;
        left: 18vw;
        animation-delay: .4s;
    }
    img:nth-of-type(3) {
        left: 15vw;
        top: -12vh;
        animation-delay: .1s;
    }
    img:nth-of-type(4) {
        top: -10vh;
        left: -15vw;
        animation-delay: .6s;
    }
    img:nth-of-type(5) {
        top: 10vh;
        animation-delay: .2s;
    }
    img:nth-of-type(6) {
        top: 5vh;
        left: 15vw;
        animation-delay: .1s;
    }
    img:nth-of-type(7) {
        top: -55vh;
        left: -10vw;
        transform: rotate(-20deg);
        animation-delay: 5s;
    }
    img:nth-of-type(8) {
        top: -65vh;
        left: 18vw;
        animation-delay: 5.4s;
    }
    img:nth-of-type(9) {
        left: -5vw;
        top: -82vh;
        animation-delay: 5.1s;
    }
    img:nth-of-type(10) {
        top: -60vh;
        left: -65vw;
        animation-delay: 5.6s;
    }
    img:nth-of-type(11) {
        top: -100vh;
        animation-delay: 5.2s;
    }
    img:nth-of-type(12) {
        top: -95vh;
        left: 15vw;
        animation-delay: 5.1s;
    }

    @keyframes fall {
        0% {
            width: 80px;
            height: 80px;
            opacity: 1;
            
            -webkit-transform: translate(0, 0px) rotateZ(0deg);
        }
        75% {
            width: 80px;
            height: 80px;
            opacity: 1;
        
            -webkit-transform: translate(100px, 600px) rotateZ(270deg); 
        }
        100% {
            width: 80px;
            height: 80px;
            opacity: 0;
            
            -webkit-transform: translate(150px, 800px) rotateZ(360deg);
        }
    }
`;

const LeafBackground = () => {
    return (
        <LeavesStyled>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
            <img src="./images/hoja-fondo.png" alt="Hoja de Chapati de fondo"/>
        </LeavesStyled>
    )
}

export default LeafBackground
