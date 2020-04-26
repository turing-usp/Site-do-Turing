import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

export default function AboutUs () {
    return (
        <div class='container'>
            <Cabecalho />
            <h1 class='titulo_aboutus'>Sobre o Grupo Turing</h1>
            <p class='descricao_aboutus'>
                Somos o grupo de extensão acadêmica<br />
                da Universidade de São Paulo<br />
                que estuda, dissemina e aplica<br />
                conhecimentos de Inteligência Artificial.
            </p>
            <h1 class='titulo_aboutus'>História</h1>
            <p class='descricao_aboutus'>
                Surgimos em 2015 como um grupo de estudos<br />
                originalmente idealizado por duas mulheres,<br />
                Fundado por um grupo de três politécnicos<br />
                e batizado em homenagem a Alan Turing (1912-1954),<br />
                matemático e lógico inglês considerado o pai da computação
            </p>
            <h1 class='titulo_aboutus'>Missão</h1>
            <p class='descricao_aboutus'>
                Nossa missão é se tornar uma referência nacional<br />
                em produção de conteúdo relacionado à Inteligência Artificial<br />
                Abrangendo material de estudo em português,<br />
                a realização de eventos como workshops e <br />
                até a aplicação em projetos
            </p>
            <h1 class='titulo_aboutus'>Cultura</h1>
            <p class='descricao_aboutus'>
                Prezamos pela diversidade e o respeito ao próximo.<br />
                Valorizamos a proatividade de nossos membros<br />
                nos quesitos de entrega, liderança<br />
                e a habilidade de trabalhar em equipe tomando atitudes,<br />
                mas mantendo-se aberto a sugestões.
            </p>
            <Rodape />
        </div>
    );
}