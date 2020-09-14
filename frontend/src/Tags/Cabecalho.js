import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Cabecalho () {

    /***********/
    /* Estados */
    /***********/

    const [isMobile, setMobile] = useState(window.innerWidth <= 800)
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [atTop, setAtTop] = useState(true)

    /***********/
    /* Funções */
    /***********/
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const handleResize = () => setMobile(window.innerWidth <= 800);
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize)
        };
    }, []);
    
    useEffect(() => {
        if (window.location.pathname !== '/') {
            setAtTop(false)            
            return            
        } else {
            let listener = document.addEventListener('scroll', e => {
                var y = document.scrollingElement.scrollTop

                if (y >= 20) {
                    if (atTop) {
                        setAtTop(false)
                    }
                } else {
                    if (!atTop) {
                        setAtTop(true)
                    }
                }
            })
            return () => {
                document.removeEventListener('scroll', listener)
            }
        }
    }, [atTop])

    /*************/
    /* Cabeçalho */
    /*************/
      
    return (
        <div class={!isSidebarOpen && atTop ? 'cabecalho cabecalho_transparente' : 'cabecalho'}>
            <Link to='/'>
                <img src={logo} class="cabecalho_logo" alt="turing" />
            </Link>
            {!isMobile && <div class="hamburguer_off">
                <NavLink to='AboutUs' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Quem somos</NavLink>                
                <NavLink to='Events' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Eventos</NavLink>
                <NavLink to='Projects' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Projetos</NavLink>
                <NavLink to='LearnAI' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Aprenda IA</NavLink>
                <NavLink to='ContactUs' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Fale Conosco</NavLink>
            </div>}
            {isMobile && <div class="hamburguer_on">
                <button class="hamburguer_btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    {!isSidebarOpen && <AiOutlineMenu size={20} color="#F2994A"/>}
                    {isSidebarOpen && <AiOutlineClose size={20} color="#F2994A"/>}
                </button>
                <div class={`sidebar ${isSidebarOpen ? 'sidebar_shown' : 'sidebar_hidden'}`}>
                    <div class="sidebar_items">
                        <NavLink to='AboutUs' className="sidebar_btn" activeClassName='sidebar_btn_ativo'>
                            <NavLink to='AboutUs' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Quem somos</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='Events' className="sidebar_btn"activeClassName='sidebar_btn_ativo'>
                            <NavLink to='Events' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Eventos</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='Projects' className="sidebar_btn" activeClassName='sidebar_btn_ativo'>
                            <NavLink to='Projects' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Projetos</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='LearnAI' className="sidebar_btn" activeClassName='sidebar_btn_ativo'>
                            <NavLink to='LearnAI' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Aprenda IA</NavLink>
                        </NavLink>
                        <hr class='separador'/>
                        <NavLink to='ContactUs' className="sidebar_btn" activeClassName='sidebar_btn_ativo'>
                            <NavLink to='ContactUs' className='cabecalho_item' activeClassName='cabecalho_texto_ativo'>Fale Conosco</NavLink>
                        </NavLink>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cabecalho;