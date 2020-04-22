import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

function Cabecalho () {
    return (
        <div class= "rect_cabecalho">
            <Link to='/'><img class = "cabecalho_logo" src={logo} alt="turing" /></Link>
            <span class="text_cabecalho"><Link to='AboutUs'>Quem somos</Link></span>
            <span class="text_cabecalho"><Link to='Events'>Eventos</Link></span> 
            <span class="text_cabecalho"><Link to='Projects'>Projetos</Link></span>
            <span class="text_cabecalho"><Link to='LearnAI'>Aprenda IA</Link></span>
            <span class="text_cabecalho"><Link to='ContactUs'>Fale Conosco</Link></span>
        </div>
    );
}

export default Cabecalho;