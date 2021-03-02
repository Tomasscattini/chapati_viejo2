import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from '../hooks/index';
import styled from 'styled-components';

const AvatarStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 7;
    top: 60px;
    right: 30px;
    img {
        cursor: pointer;
    }
    ul {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            margin: 10px 0;
            text-align: right;
        }
        cursor: pointer;
    }
`;

const Avatar = () => {
    const [ menu, setMenu ] = useState('none');
    const { user, logout } = useContextInfo();

    const toggleMenu = ()=>{
        menu === 'none' ? setMenu('block') : setMenu('none');
    };

    return (
        <AvatarStyled>
            {user ? <><img onClick={toggleMenu} src="./images/user-avatar.png" alt="Avatar del perfil"/>
            <ul style={{display: menu}}>
                <Link onClick={toggleMenu} to="/dashboard"><li>Dashboard</li></Link>
                <Link onClick={toggleMenu} to="/profile"><li>Mi perfil</li></Link>
                <li onClick={()=>{
                    toggleMenu();
                    logout();
                }}>Cerrar sesión</li>
            </ul></> :             
            <><Link to="/"><img src="./images/user-avatar.png" alt="Avatar para acceder a las cuentas"/></Link></>}
        </AvatarStyled>
    );
};

export default Avatar;
