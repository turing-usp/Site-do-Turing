import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Background, Parallax} from 'react-parallax';
import fundo from "../../assets/background.png";
import './styles.css';
import ialogo from "../../assets/imag-aprenda-ia.png";
import projeto from "../../assets/apresentacao.png";
import evento from "../../assets/eventos.png";
import computador from "../../assets/foto-computador.png";
import projetos from "../../assets/img-projetos.png";
import Cabecalho from '../../Tags/Cabecalho';
import CabecalhoGhost from '../../Tags/CabecalhoGhost';
import Rodape from '../../Tags/Rodape';


export default function Homepage(){
    return(
        <div>
            
            <Cabecalho />
            <CabecalhoGhost />
                <Parallax style={{width: '100%'}}
                strength={250}>
                    <div style={{height: 700}}/>
                    <Background>
                        <img sizes={{width:'50%'}} src={fundo} alt="fundo azul" />
                    </Background>
                </Parallax>
            
            <div class="caixa-superior"></div>
            <h1 class="texto-superior">O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai...</h1>
            <button class="saiba-mais" href="#">Saiba mais</button>
            <div class='aprenda'>
                <h1 class="titulo" id="aprenda-ia">Aprenda IA</h1>
                <h2 class="descricao" id="descricao-aprenda-ia">...é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!</h2>
                <img class="img-aprenda-ia" src={ialogo} alt="logo-ia"></img>
            </div>
            
                <Parallax style={{width: '100%'}}
                strength={250}>
                    <div style={{height: 700}}/>
                    <Background  >
                        <img sizes={{height: '85%', width: '100%'}} src={projeto} alt="projeto"></img>
                    </Background>
                </Parallax>
                
            
            <div class='evento'>
                <h1 class="titulo" id="eventos">Eventos</h1>
                <h2 class="descricao" id="descricao-eventos">...Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado...</h2>
                <img class="img-eventos" src={evento} alt="evento"></img>
            </div>
            <div>
                <Parallax style={{width: '100%'}}
                    strength={250}
                >
                    <div style={{height: 700}}/>
                    <Background  >
                    <img sizes={{width: '100%', height: '100%'}} src={computador} alt="foto computador"></img>
                    </Background>
                </Parallax>
                
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

