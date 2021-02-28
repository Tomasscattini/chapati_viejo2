import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PeopleStyled = styled.div`
     background-color: ${props=>props.theme.color.color3};
     min-height: 100vh;
     width: 100vw;
     padding-top: 18vh;
     color: ${props=>props.theme.color.color3};
        &>div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            h3 {
                text-align: left;
                width: 250px;
                align-self: flex-start;
                font-weight: 400;
                margin: 0 8vw;
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
        }
    }
`;

const People = () => {
    gsap.registerPlugin(ScrollTrigger);
    const $peopleContainer = useRef(null);

    useEffect(()=> {
        const container = $peopleContainer.current;
        gsap.to(
            container,
            {
                backgroundColor: '#008b70',
                color: '#EBE5DF',
                scrollTrigger: {
                    trigger: container,
                    start: "top 40%",
                    end: "top 100px",
                    scrub: true
                }
            }
        )
        gsap.to(
            container.querySelector('h3'),
            {
                borderBottom: '2px solid #EBE5DF',
                paddingBottom: '20px',
                scrollTrigger: {
                    trigger: container,
                    start: "top 40%",
                    end: "top 100px",
                    scrub: true
                }
            }
        )
    }, []);

    return (
        <PeopleStyled id="people" ref={$peopleContainer}>
            <div className="who-we-are">
                    <h3>Sobre Chapati</h3>
                    <p>Somxs un montón de voluntarixs, amigxs y familia que hicieron posible este espacio.<br />
                    Hoy , Guido, Guillaume y Lucia son quienes cuidan Chapati, hacen crecer la huerta y sostienen este proyecto de manera colaborativa.</p>
                    <img className="about-img" src="./images/about.jpg" alt="Fogata nocturna en Chapati"/>
            </div>
        </PeopleStyled>
    );
};

export default People;
