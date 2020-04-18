import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from './assets/logo.png';
import './index.css';

function Cabecalho () {
    return (
        <div class= "rect_cabecalho">
            <img class = "logo" src={logo} alt="turing" />
            <span class="text_cabecalho">Quem somos</span>
            <span class="text_cabecalho">Eventos</span>
            <span class="text_cabecalho">Projetos</span>
            <span class="text_cabecalho">Aprenda IA</span>
            <span class="text_cabecalho">Fale Conosco</span>
        </div>
    );
}

export default Cabecalho;