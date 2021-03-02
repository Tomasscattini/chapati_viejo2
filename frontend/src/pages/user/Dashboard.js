import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardStyled = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 70px;
    .nav {
        position: absolute;
        z-index: 6;
        width: 100vw;
        top: 60px;
        left: 5px;
        display: flex;
        img {
            height: 25px;
        }
        p {
            margin: 0 10px;
            font-size: 1.1rem;
        }
    }
    h4 {
        margin: 20px 0;
    }
    ul {
        padding: 0;
        margin: 10vh 0;
        li {
            list-style: none;
        }
    }
`;

const Dashboard = () => {
    return (
        <DashboardStyled>
            <Link to="/home">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Home</p>
                </nav>
            </Link>
            <h4>Dashboard</h4>

            <ul>
                <Link to=""><li>Mi perfil</li></Link>
                <Link to=""><li>Mis compras conscientes</li></Link>
                <Link to=""><li>Voluntariados</li></Link>
            </ul>
        </DashboardStyled>
    );
};

export default Dashboard;
