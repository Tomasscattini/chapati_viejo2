import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

const LogoStyled = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 5;
    img {
        height: 40px;
    }
`

const Logo = () => {
    return (
        <LogoStyled>
           <HashLink to="#top"><img src="./images/chapatinegro.png" alt="Logo Chapati" /></HashLink> 
        </LogoStyled>
    )
}

export default Logo
