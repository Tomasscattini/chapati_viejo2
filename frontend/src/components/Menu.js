import React, {useRef} from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const MenuStyled = styled.nav`
    position: fixed;
    bottom: 50px;
    right: 20px;
    z-index: 500;
    .menu-btn-mobile {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        width: 30px;
        transition: all .4s ease;
        cursor: pointer;
        &:hover {
            transform: rotate(90deg);
        }
        &:hover span:nth-of-type(1) {
            transform: translateY(7px);
        }
        &:hover span:nth-of-type(2) {
            transform: rotate(90deg);
        }
        &:hover span:nth-of-type(3) {
            transform: translateY(-7px);
            }
        span {
            width: 100%;
            height: 6px;
            transition: all .4s ease;
            mix-blend-mode: multiply;
        }
        span:nth-of-type(1) {
            background-color: ${props=>props.theme.color.color3};
        }
        span:nth-of-type(2) {
            background-color: ${props=>props.theme.color.color6};
            transform: translate(-3px) rotate(-10deg);
        }
        span:nth-of-type(3) {
            background-color: ${props=>props.theme.color.color5};
        }
    }
    .menu {
        height: 100vh;
        width: 100vw;
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 100vh;
        left: 0;
        z-index: 20;
        overflow: hidden;
        background-image: url("./images/bkg-img-menu.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all .5s cubic-bezier(0,1.19,1,1);
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-height: 60px;
            padding: 10px;
            img {
                height: 40px;
                cursor: none;
            }
            .close {
                height: 30px;
                cursor: pointer;
                transition: all .3s ease;
                &:hover {
                    transform: rotate(-90deg);
                }
            }
        }
        .middle {
            ol {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 65vh;
                padding-left: 20vw;
                a {
                    color: white;
                    transition: color .3s ease;
                    ${'' /* cursor: none; */}
                    li {
                        font-size: 1.8rem;
                        font-weight: 600;
                        transform: skew(20deg, 5deg) rotate(-20deg);
                        transition: transform .5s ease-out .1s;
                    }
                    &:hover {
                        color: ${props=>props.theme.color.color2};
                    }
                }
            }
        }
        .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                ${'' /* cursor: none; */}
                img {
                    margin: 2vw;
                    opacity: 0;
                    transition: opacity .3s ease-in .5s;
                    transition: filter .3s ease;
                    &:hover {
                        filter: invert(20%);
                    }
                }
            }
        }
    }
    .show {
        top: 0;
        .middle ol a li {
            transform: skew(0) rotate(0);
        }
        .bottom a img {
            opacity: 1;
        }
    }
`

const Menu = () => {
    const $menu = useRef(null);

    const toggleMenu = () => {
        $menu.current.classList.toggle("show");
    };

    return (
        <MenuStyled>
            <div onClick={toggleMenu} className="menu-btn-mobile">
                <span></span><span></span><span></span>
            </div>
            <div ref={$menu} className="menu">
                <div className="top">
                    <HashLink to="#top"><img onClick={toggleMenu} className="logo" src="./images/chapatiblanco.png" alt="Logo Chapati blanco" /></HashLink>
                    <img onClick={toggleMenu} className="close" src="./images/close-x.svg" alt="Cerrar menu" />
                </div>
                <div className="middle">
                    <ol>
                        <HashLink onClick={toggleMenu} to="#about"><li>Sobre Chapati</li></HashLink>
                        <HashLink onClick={toggleMenu} to="#people"><li>Quienes somos</li></HashLink>
                        <HashLink onClick={toggleMenu} to="#works"><li>Qué hacemos</li></HashLink>
                        <HashLink onClick={toggleMenu} to="#store"><li>Tienda Consciente</li></HashLink>
                        <HashLink onClick={toggleMenu} to="#volunteerings"><li>Voluntariados</li></HashLink>
                        <HashLink onClick={toggleMenu} to="#contact"><li>Contactanos</li></HashLink>
                    </ol>
                </div>
                <div className="bottom">
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/chapati.delta/"><img src="./images/instagram-logo.png" alt="Logo Instagram" /></a>
                    <a  href="tel:646-637-4077"><img src="./images/whatsapp-logo.png" alt="Logo Whatsapp" /></a>
                </div>
            </div>
        </MenuStyled>
    );
};

export default Menu;
