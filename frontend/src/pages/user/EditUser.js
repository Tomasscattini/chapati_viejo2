import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EditUserStyled = styled.main`

`;


const EditUser = () => {
    return (
        <EditUserStyled>
            <Link to="/profile">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Mi perfil</p>
                </nav>
            </Link>
        </EditUserStyled>
    )
};

export default EditUser;