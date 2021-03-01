import React from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from '../hooks/index';
import styled from 'styled-components';

const AvatarStyled = styled.div`
    position: absolute;
    z-index: 7;
    top: 30px;
    right: 30px;
    p {
        cursor: pointer;
    }
`;

const Avatar = () => {
    const { user, logout } = useContextInfo();

    return (
        <AvatarStyled>
            {user ? <><img src="./images/user-avatar.png" alt="Avatar del perfil"/>
            <p onClick={logout}>Cerrar sesión</p></> : 
            <><Link to="/"><img src="./images/user-avatar.png" alt="Avatar para acceder a las cuentas"/></Link></>}
        </AvatarStyled>
    );
};

export default Avatar;
