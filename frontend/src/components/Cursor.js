import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CursorStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 40px;
    width: 40px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${props=>props.theme.color.color6};
    opacity: .8;
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow: 0 0 2px ${props=>props.theme.color.color6},
                0 0 4px ${props=>props.theme.color.color6},
                0 0 6px ${props=>props.theme.color.color6};
    z-index: 999;
    &>div {
        width: 5px;
        height: 5px;
        box-sizing: border-box;
    }
    &>div:nth-of-type(1) {
        border-bottom: 1px solid ${props=>props.theme.color.color4};
        border-right: 1px solid ${props=>props.theme.color.color4};
    }
    &>div:nth-of-type(2) {
        border-bottom: 1px solid ${props=>props.theme.color.color4};
    }
    &>div:nth-of-type(3) {
        border-right: 1px solid ${props=>props.theme.color.color4};
    }
`;

const Cursor = () => {
    const cursor = useRef(null);

    useEffect(() => {
        window.addEventListener('mousemove', e => {
            cursor.current.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`)
        });
        return () => {
            window.removeEventListener("mousemove", ()=>{});
        };
    }, []);

    useEffect(() => {
        window.addEventListener('click', e => {
            cursor.current.classList.add("expand");
            setTimeout(()=> {
                cursor.current.classList.remove("expand");
            }, 300);
        });
        return () => {
            window.removeEventListener("click", ()=>{});
        };
    }, []);

    return (
        <CursorStyled ref={cursor}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </CursorStyled>
    );
};

export default Cursor;
