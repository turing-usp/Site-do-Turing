import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import fundo from "../../assets/background.png";
import './styles.css';
import ialogo from "../../assets/imag-aprenda-ia.png";
import projeto from "../../assets/apresentacao.png";
import evento from "../../assets/eventos.png";
import computador from "../../assets/foto-computador.png";
import projetos from "../../assets/img-projetos.png";
import Cabecalho from '../../Tags/Cabecalho';
import Rodape from '../../Tags/Rodape';

export default function Homepage(){
    return(
        <div>
            <Cabecalho />
            <div class="background-image">
                <img class="background-image" src={fundo} alt="fundo-azul"></img>
            </div>
            <div class="caixa-superior"></div>
            <h1 class="texto-superior">O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai...</h1>
            <button class="saiba-mais" href="#">Saiba mais</button>
            <div>
                <h1 class="titulo" id="aprenda-ia">Aprenda IA</h1>
                <h2 class="descricao" id="descricao-aprenda-ia">...é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!</h2>
                <img class="img-aprenda-ia" src={ialogo} alt="logo-ia"></img>
            </div>
            <div>
                <img class="projeto" src={projeto} alt="projeto"></img>
            </div>
            <div>
                <h1 class="titulo" id="eventos">Eventos</h1>
                <h2 class="descricao" id="descricao-eventos">...Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado...</h2>
                <img class="img-eventos" src={evento} alt="evento"></img>
            </div>
            <div>
                <img class="computador" src={computador} alt="foto computador"></img>
            </div>
            <div>
                <h1 class="titulo" id="projetos">Projetos</h1>
                <h2 class="descricao" id="descricao-projetos"> ...é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!</h2>
                <img class="projetos" src={projetos} alt="projetos"></img>
            </div>
            <div class='rodape_homepage'>
                <Rodape />
            </div>
            
        </div>
    );
}

