import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ConfirmEmailStyled = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 70px;
    .nav {
        position: absolute;
        z-index: 9;
        width: 100vw;
        top: 60px;
        left: 5px;
        display: flex;
        img {
            height: 25px;
        }
        p {
            margin: 0 30px;
            font-size: 1.1rem;
        }
    }
    h3 {
        margin: 40px 0 20px 0;
    }
    .description {
        margin: 20px;
        font-weight: bold;
        color: ${props=>props.theme.color.color2};
    }

    .already-confirmed {
        font-weight: normal;
    }
`;

const ConfirmEmail = () => {
    return (
        <ConfirmEmailStyled>
            <Link to="/home">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Home</p>
                </nav>
            </Link>
            <h3>Confirmá tu Email</h3>
            <p className="description">Te enviamos un Email a la dirección que registraste con nosotros. Por favor verificá tu Email para continuar.</p>
            <p className="description already-confirmed">Si ya confirmaste tu mail hacé click aquí</p>

            <Link className="description" to="/login">Entrar a mi cuenta</Link>
        </ConfirmEmailStyled>
    );
};

export default ConfirmEmail;
