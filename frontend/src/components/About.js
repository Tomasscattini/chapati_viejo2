import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutStyled = styled.main`
    position: relative;
    min-height: 100vh;
    color: ${props=>props.theme.color.bg};
    transition: all .5s ease;
    padding-top: 15vh;
    .orange-container {
        position:absolute;
        background-color: ${props=>props.theme.color.color3};
        top: 0;
        left: 0;
        width: 100%;
        height: 60vh;
        z-index: -1;
        transition: all .3s ease;
    }
    &>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        transition: all .3s ease;
        h3 {
            text-align: left;
            width: 90%;
            font-weight: 400;
            margin: 0;
            animation-duration: 1s;
            &:after {
                content: '';
                display: block;
                width: 250px;
                border-bottom: 2px solid ${props=>props.theme.color.bg};
                margin-top: 10px;
            }
        }
        p {
            width: 90%;
            line-height: 1.8;
            margin: 40px 0;
            font-size: 1.2rem;
            font-weight: 300;
        }
        img {
            width: 100%;
            margin: 80px 0;
        }
        .shake {
            animation: 2s linear shake; 
        }
    }
    .bg-color {
        background-color: ${props=>props.theme.color.color3};
    }
    @keyframes shake {
        from {
            transform: rotate(0);
        } 25% {
            transform: rotate(2deg);
        } to {
            transform: rotate(0);
        }
    }
`;

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const $main = useRef(null);
    const $letras = useRef(null);

    useEffect(()=> {
        const container = $main.current;
        gsap.to(
            container,
            {
                backgroundColor: 'transparent',
                scrollTrigger: {
                    trigger: container,
                    start: "top 10%",
                    end: "top 100px",
                    scrub: true
                }
            }
        )
    }, []);

    useEffect(()=> {
        const container = $letras.current;
        gsap.to(
            container,
            {
                color: 'black',
                scrollTrigger: {
                    trigger: $main.current,
                    start: "top 10%",
                    end: "top 100px",
                    scrub: true
                }
            }
        )
    }, []);

    useEffect(()=> {
        ScrollTrigger.create({
            trigger: $letras.current.querySelector('h3'),
            start: "top 70%",
            toggleActions: "restart pause restart pause",
            toggleClass: "animate__fadeIn"
        })
    }, []);

    useEffect(()=> {
        gsap.utils.toArray('.about-img').forEach(img => {
        ScrollTrigger.create({
            trigger: img,
            start: "top center",
            toggleActions: "restart pause restart pause",
            toggleClass: "shake"
        })
    })
    }, []);

    return (
        <AboutStyled id="about">
            <div className="orange-container" ref={$main}></div>
            <div ref={$letras} className="about-chapati">
                <h3 className="animate__animated">Sobre Chapati</h3>
                <p>Ubicados en la tercera sección del Delta del Tigre, Chapati es un  proyecto nace de la amistad y del  deseo de construir un espacio consciente y en armonia con la naturaleza.</p>
                <img className="about-img" src="./images/about.jpg" alt="Fogata nocturna en Chapati"/>
            </div>
            <div className="deseo">
                <img className="about-img" src="./images/about2.jpg" alt="Construyendo la casa"/>
                <h3>Nuestro deseo</h3>
                <p>Construir un espacio que se sostiene a través del intercambio de experiencias, de saberes y de la producción consciente de productos artesanales, orgánicos y hechos de manera colaborativa.</p>
            </div>        
        </AboutStyled>
    );
};

export default About;
