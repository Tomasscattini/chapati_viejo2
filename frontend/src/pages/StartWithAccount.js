import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import LeafBackground from '../components/LeafBackground';

const StartStyled = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 28vh 0;
    z-index: 6;
    background-color: ${props=>props.theme.color.color1};
    #brand {
        width: 60%;
        height: auto;
        margin-bottom: 20px;
    }
    button {
        position: relative;
        z-index: 8;
        margin: 10px 0;
    }
    .skip {
        background-color: ${props=> props.theme.color.color3};
        &:hover {
            background-color: ${props=>props.theme.color.color3Dark};
        }
    }
`;

const StartWithAccount = () => {
    return (
        <StartStyled>
            <LeafBackground />
            <img id="brand" src="./images/brand01.png" alt="Nombre de Chapati"/>
            <Link to="/signup"><Button>Crear cuenta</Button></Link>          
            <Link to="/login"><Button>Tengo cuenta</Button></Link>         
            <Link to="/home"><Button className="skip">Continuar sin cuenta</Button></Link>         
        </StartStyled>
    );
};

export default StartWithAccount;
