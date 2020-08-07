import React, { useEffect, useState } from "react";
import WindowSizeListener from 'react-window-size-listener'
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Cabecalho () {


    const [isMobile, setMobile] = useState(window.innerWidth <= 800)
    const [isVisible, setVisible] = useState(false);
    const [isTransitioning, setTransitioning] = useState(false);

    const toggleNav = () => {

        setVisible(!isVisible);

        setTransitioning(true)
        setTimeout(() => {
            setTransitioning(false)
        }, 500)
    };

    
    useEffect(() => {
        if (typeof window === 'undefined') return;      
        const handleResize = () => setMobile(window.innerWidth <= 800);
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize)
        };
      });


    return (
        <div class="cabecalho">
            <Link to='/'>
                <img src={logo} class="cabecalho_logo" alt="turing" />
            </Link>
            {!isMobile && <div class="hamburguer_off">
                <NavLink to='AboutUs' className='cabecalho_txt' activeClassName='pagina_ativa'>Quem somos</NavLink>                
                <NavLink to='Events' className='cabecalho_txt' activeClassName='pagina_ativa'>Eventos</NavLink>
                <NavLink to='Projects' className='cabecalho_txt' activeClassName='pagina_ativa'>Projetos</NavLink>
                <NavLink to='LearnAI' className='cabecalho_txt' activeClassName='pagina_ativa'>Aprenda IA</NavLink>
                <NavLink to='ContactUs' className='cabecalho_txt' activeClassName='pagina_ativa'>Fale Conosco</NavLink>
            </div>}
            {isMobile && <div class="hamburguer_on">
                <button class="hamburguer_btn" onClick={toggleNav}>
                    {!isVisible && <AiOutlineMenu size={20} color="#F2994A"/>}
                    {isVisible && <AiOutlineClose size={20} color="#F2994A"/>}
                </button>
                <div class={`sidebar${isVisible ? '_shown' : (isTransitioning ? '_hiding' : '_hidden')}`}>
                    <div class="sidebar_items">
                        <Link class="sidebar_btn" to='AboutUs'>
                            <NavLink to='AboutUs' className='cabecalho_txt' activeClassName='pagina_ativa'>Quem somos</NavLink>
                        </Link>
                        <Link class="sidebar_btn" to='Events'>
                            <NavLink to='Events' className='cabecalho_txt' activeClassName='pagina_ativa'>Eventos</NavLink>
                        </Link>
                        <Link class="sidebar_btn" to='Projects'>
                            <NavLink to='Projects' className='cabecalho_txt' activeClassName='pagina_ativa'>Projetos</NavLink>
                        </Link>
                        <Link class="sidebar_btn" to='LearnAI'>
                            <NavLink to='LearnAI' className='cabecalho_txt' activeClassName='pagina_ativa'>Aprenda IA</NavLink>
                        </Link>
                        <Link class="sidebar_btn" to='ContactUs'>
                            <NavLink to='ContactUs' className='cabecalho_txt' activeClassName='pagina_ativa'>Fale Conosco</NavLink>
                        </Link>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cabecalho;