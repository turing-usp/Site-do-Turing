import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import {FiMenu} from 'react-icons/fi';

function Cabecalho () {
    const [isSmall, setSmall] = useState(false);
    const [isVisible, setVisible] = useState(false);

    const toggleNav = () => {
        setVisible(!isVisible);
        window.location.reload();
    };

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches){
            setSmall(true);
        } else {
            setSmall(false);
        }
    }

    useEffect(() => {
                const mediaQuery = window.matchMedia("(max-width: 700px)");
                mediaQuery.addListener(handleMediaQueryChange);

                return () => {
                    mediaQuery.removeListener(handleMediaQueryChange);
                };
            },[]);


    return (
        <div class= "rect_cabecalho">
            {!isSmall && (
                <Link to='/'><img class = "cabecalho_logo" src={logo} alt="turing" /></Link> 
            )}
            {/* Botão do menu pequeno, se a tela for pequena*/}
            {isSmall && (
                <div class="turingebotao">
                <button  class= "menu_btn"onClick={toggleNav}>
                <FiMenu size={15} color="#F2994A"/>
                </button> 
                <Link to='/'><img class = "cabecalho_logo" src={logo} alt="turing" /></Link> 
                </div> 
            )}
            
            
            {(!isSmall || isVisible) && (
            <div class="rotas_site">
                <span class="text_cabecalho"><Link to='AboutUs'>Quem somos</Link></span>
                <span class="text_cabecalho"><Link to='Events'>Eventos</Link></span> 
                <span class="text_cabecalho"><Link to='Projects'>Projetos</Link></span>
                <span class="text_cabecalho"><Link to='LearnAI'>Aprenda IA</Link></span>
                <span class="text_cabecalho"><Link to='ContactUs'>Fale Conosco</Link></span>
            </div>
            )}

        </div>
    );
}

export default Cabecalho;