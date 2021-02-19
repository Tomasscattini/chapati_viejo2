import React, {useRef} from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const MenuStyled = styled.nav`
    position: fixed;
    bottom: 50px;
    right: 20px;
    z-index: 500;
    .menu-btn-mobile {
        height: 50px;
        cursor: pointer;
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
        transition: all .5s ease-in-out;
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-height: 60px;
            padding: 10px;
            img {
                height: 40px;
                cursor: pointer;
            }
            .close {
                height: 30px;
            }
        }
        .middle {
            ol {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 65vh;
                padding-left: 80px;
                a {
                    color: white;
                    li {
                        font-size: 1.8rem;
                        font-weight: 600;
                    }
                }
            }
        }
        .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                margin: 5px;
            }
        }
    }
    .show {
        top: 0;
    }
`

const Menu = () => {
    const $menu = useRef(null);

    const toggleMenu = () => {
        $menu.current.classList.toggle("show");
    };

    return (
        <MenuStyled>
            <img onClick={toggleMenu} className="menu-btn-mobile" src="./images/hamburguerMenu.svg" alt="Menu hamburguesa" />
            <div ref={$menu} className="menu">
                <div className="top">
                    <HashLink to="#top"><img onClick={toggleMenu} className="logo" src="./images/chapatiblanco.png" alt="Logo Chapati blanco" /></HashLink>
                    <img onClick={toggleMenu} className="close" src="./images/close-x.svg" alt="Cerrar menu" />
                </div>
                <div className="middle">
                    <ol>
                        <HashLink onClick={toggleMenu} to="#about"><li>Sobre Chapati</li></HashLink>
                        <HashLink onClick={toggleMenu} to="#us"><li>Quienes somos</li></HashLink>
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
