import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileStyled = styled.main`

`;

const Profile = () => {
    return (
        <ProfileStyled>
            <Link to="/home">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Home</p>
                </nav>
            </Link>
        </ProfileStyled>
    );
};

export default Profile;
