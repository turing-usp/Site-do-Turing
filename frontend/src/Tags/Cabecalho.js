import React, { useEffect, useState } from "react";
import WindowSizeListener from 'react-window-size-listener'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import {FiMenu} from 'react-icons/fi';

function Cabecalho () {
    const [width, setWidth] = useState(window.innerWidth > 700)
    const [isVisible, setVisible] = useState(false);

    const toggleNav = () => {
        setVisible(!isVisible);
    };   
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
      
        const handleResize = () => setWidth(window.innerWidth > 800);
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize)
        };
      });


    return (
        <div class= "rect_cabecalho">
                <div class="turingebotao">
                <button  class= "menu_btn"onClick={toggleNav}>
                    <FiMenu size={15} color="#F2994A"/>
                </button> 
                <Link to='/'><img class = "cabecalho_logo" src={logo} alt="turing" /></Link> 
                </div> 
            
            
            {(isVisible || width) && (
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