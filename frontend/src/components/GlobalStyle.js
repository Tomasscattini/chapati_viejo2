import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgba(138, 104, 70, 0.17);
        padding-top: 60px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }
    a {
        color: black;
        text-decoration: none;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2.8rem;
    }
    h3 {
        font-size: 2.4rem;
    }
    p, li, a {
        font-size: 1rem;
    }
`

export default GlobalStyle