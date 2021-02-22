import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutStyled = styled.main`
    min-height: 100vh;
    color: #EBE5DF;
    &>div {
        min-height: 100vh;
        height: 100%;
        width: 100vw;
        transition: all .1s ease;
        padding-top: 18vh;
        &>div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            h3 {
                text-align: left;
                width: 90%;
                font-weight: 400;
                margin: 0;
                &:after {
                    content: '';
                    display: block;
                    width: 250px;
                    border-bottom: 2px solid #EBE5DF;
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
                animation: 1s linear shake; 
            }
        }
    }
    .bg-color {
        background-color: #C7604A;
    }
    @keyframes shake {
        from {
            transform: rotate(0);
        } 25% {
            transform: rotate(4deg);
        } 50% {
            transform: rotate(0);
        } 75% {
            transform: rotate(-4deg);
        } to {
            transform: rotate(0);
        }
    }
`;

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const $main = useRef(null);

    useEffect(()=> {
        const container = $main.current;
        gsap.to(
            container,
            {
                backgroundColor: '#C7604A',
                scrollTrigger: {
                    trigger: container,
                    start: "top 40%",
                    end: "top 100px",
                    scrub: true
                }
            }
        )
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
            <div ref={$main}>
                <div className="about-chapati">
                    <h3>Sobre Chapati</h3>
                    <p>Ubicados en la tercera sección del Delta del Tigre, Chapati es un  proyecto nace de la amistad y del  deseo de construir un espacio consciente y en armonia con la naturaleza.</p>
                    <img className="about-img" src="./images/about.jpg" alt="Fogata nocturna en Chapati"/>
                </div>
                <div className="deseo">
                    <img className="about-img" src="./images/about2.jpg" alt="Construyendo la casa"/>
                    <h3>Nuestro deseo</h3>
                    <p>Construir un espacio que se sostiene a través del intercambio de experiencias, de saberes y de la producción consciente de productos artesanales, orgánicos y hechos de manera colaborativa. 
</p>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;
