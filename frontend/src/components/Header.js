import React, { useState, useEffect } from 'react';
import { useContextInfo } from '../hooks/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeafBackground from './LeafBackground';
import { Button } from './Button';

const HeaderStyled = styled.header`
    position: relative;
    z-index: 6;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
    box-sizing: border-box;
    background-color: ${props=>props.theme.color.color1};
    h3 {
        color: white;
        font-weight: 300;
        font-size: 2.8rem;
        text-align: center;
    }
    .dashboard-btn {
        position: relative;
        z-index: 8;
        background-color: ${props=> props.theme.color.color3};
        &:hover {
            background-color: ${props=>props.theme.color.color3Dark};
        }
    }
`;

const Header = () => {
    const [ userLogged, setUserLogged ] = useState(null);
    const { user } = useContextInfo();

    useEffect(()=> {
        if(user) setUserLogged(user);
        return () =>{
            setUserLogged(null);
        };
    }, [user]);

    return (
        <HeaderStyled>
            <LeafBackground />
            {userLogged ? <><h3 className="title">Bienvenidx<br/> {userLogged.username}</h3>
            <Link to="/dashboard"><Button className="dashboard-btn">Dashboard</Button></Link></> : <h3 className="title">Bienvenidxs a chapati</h3>}
        </HeaderStyled>
    );
};

export default Header;
