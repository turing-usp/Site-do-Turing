import React, { useEffect, useState } from "react";
import WindowSizeListener from 'react-window-size-listener'
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function Cabecalho () {

    const [isMobile, setMobile] = useState(window.innerWidth <= 800)
    const [isVisible, setVisible] = useState(false);
    
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
                <NavLink to='AboutUs' className='cabecalho_txt' activeClassName='texto_ativo'>Quem somos</NavLink>                
                <NavLink to='Events' className='cabecalho_txt' activeClassName='texto_ativo'>Eventos</NavLink>
                <NavLink to='Projects' className='cabecalho_txt' activeClassName='texto_ativo'>Projetos</NavLink>
                <NavLink to='LearnAI' className='cabecalho_txt' activeClassName='texto_ativo'>Aprenda IA</NavLink>
                <NavLink to='ContactUs' className='cabecalho_txt' activeClassName='texto_ativo'>Fale Conosco</NavLink>
            </div>}
            {isMobile && <div class="hamburguer_on">
                <button class="hamburguer_btn" onClick={() => setVisible(!isVisible)}>
                    {!isVisible && <AiOutlineMenu size={20} color="#F2994A"/>}
                    {isVisible && <AiOutlineClose size={20} color="#F2994A"/>}
                </button>
                <div class={`sidebar ${isVisible ? 'show' : 'hide' }`}>
                    <div class="sidebar_items">
                        <NavLink to='AboutUs' className="sidebar_btn" activeClassName='btn_ativo'>
                            <NavLink to='AboutUs' className='cabecalho_txt' activeClassName='texto_ativo'>Quem somos</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='Events' className="sidebar_btn"activeClassName='btn_ativo'>
                            <NavLink to='Events' className='cabecalho_txt' activeClassName='texto_ativo'>Eventos</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='Projects' className="sidebar_btn" activeClassName='btn_ativo'>
                            <NavLink to='Projects' className='cabecalho_txt' activeClassName='texto_ativo'>Projetos</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='LearnAI' className="sidebar_btn" activeClassName='btn_ativo'>
                            <NavLink to='LearnAI' className='cabecalho_txt' activeClassName='texto_ativo'>Aprenda IA</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='ContactUs' className="sidebar_btn" activeClassName='btn_ativo'>
                            <NavLink to='ContactUs' className='cabecalho_txt' activeClassName='texto_ativo'>Fale Conosco</NavLink>
                        </NavLink>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cabecalho;