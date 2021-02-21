import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: rgba(138, 104, 70, 0.17);
        padding-top: 60px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        overflow-x: hidden;
        width: 100vw;
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
        cursor: url('./images/cursor.png'), auto;
    }
    body::-webkit-scrollbar {
    display: none;
    }
    a {
        color: black;
        text-decoration: none;
    }
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    h3 {
        font-size: 1.8rem;
    }
    p, li, a {
        font-size: 1rem;
    }
`

export default GlobalStyle