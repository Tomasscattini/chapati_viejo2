import React from 'react';
import LeafBackground from '../../components/LeafBackground';
import styled from 'styled-components';

const NotFoundStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  h3 {
    position: relative;
    z-index: 8;
    text-align: center;
    color: ${props=>props.theme.color.color2};
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <LeafBackground />
      <h3>404 - Página no encontrada</h3>
    </NotFoundStyled>
  );
}

export default NotFound;
