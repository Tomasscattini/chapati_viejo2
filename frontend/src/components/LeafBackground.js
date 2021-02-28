import React from 'react';
import styled from 'styled-components';

const LeavesStyled = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10vh 10vw;
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
    }
    img:nth-of-type(1) {
        top: -5vh;
        left: -10vw;
        transform: rotate(-20deg);
    }
    img:nth-of-type(2) {
        top: 5vh;
        left: 18vw;
    }
    img:nth-of-type(3) {
        left: 15vw;
        top: -12vh;
    }
    img:nth-of-type(4) {
        top: -10vh;
        left: -15vw;
    }
    img:nth-of-type(5) {
        top: 10vh;
    }
    img:nth-of-type(6) {
        left: 15vw;
        top: 5vh;
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
        </LeavesStyled>
    )
}

export default LeafBackground
