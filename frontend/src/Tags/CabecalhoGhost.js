import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

function CabecalhoGhost () {
    return (
        <div class= "rect_cabecalho_ghost">
            <img class = "cabecalho_logo" src={logo} alt="turing" />
            <span class="text_cabecalho">Quem somos</span>
            <span class="text_cabecalho">Eventos</span> 
            <span class="text_cabecalho">Projetos</span>
            <span class="text_cabecalho">Aprenda IA</span>
            <span class="text_cabecalho">Fale Conosco</span>
        </div>
    );
}

export default CabecalhoGhost;