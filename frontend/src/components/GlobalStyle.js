import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }
    body {
        background-color: ${props=>props.theme.color.color1};
        padding-top: 60px;
        font-family: ${props=>props.theme.font.primary};
        font-size: 16px;
        overflow-x: hidden;
        width: 100vw;
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ${'' /* cursor: none; */}
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

    .expand {
        animation: expand .3s linear;
    }
    @keyframes expand {
        from {
            transform: scale(1) translate(-50%, -50%);
        }
        to {
            transform: scale(3) translate(0, 0);
            opacity: 0;
        }
    }
`

export default GlobalStyle