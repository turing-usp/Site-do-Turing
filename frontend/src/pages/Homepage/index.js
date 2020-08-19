import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import WindowSizeListener from 'react-window-size-listener'
import {Background, Parallax} from 'react-parallax';
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


    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(window.innerWidth > 800);
    },[window.innerWidth]);




    return(
        <div class='homepage_container'>
            <Cabecalho />

            <WindowSizeListener onResize={() => setIsVisible(window.innerWidth > 800)}>
            </WindowSizeListener>
                {isVisible && <Parallax style={{marginTop: "7vw"}}
                strength={250}>
                    <div style={{height: '60vw', width: '100%'}}>
                        <div class="caixa-superior">
                            <h1 class="texto-superior">
                            Conheça o Grupo Turing: uma extensão universitária da Universidade de São Paulo (USP) que 
                            acredita em gerar impacto disseminando, aplicando e estudando Inteligência Artificial
                            </h1>
                        </div>
                        <br />
                        <Link to="/AboutUs">
                            <button class="saiba-mais" href="#">Saiba mais</button>
                        </Link>
                    </div>
                    <Background>
                        <img class='parallax_img' src={fundo} alt="fundo azul" />
                    </Background>
                </Parallax>}

                {!isVisible && 
                <div class='imagem-mobile'>
                    <div class="caixa-superior">
                        <h1 class="texto-superior">
                        Conheça o Grupo Turing: uma extensão universitária da Universidade de São Paulo (USP) que 
                        acredita em gerar impacto disseminando, aplicando e estudando Inteligência Artificial
                        </h1>
                    </div>
                    <Link to="/AboutUs">
                        <button class="saiba-mais" href="#">Saiba mais</button>
                    </Link>
                </div>}
            <div class='bloco_info'>
                <img class="img" src={ialogo} alt="logo-ia" />
                <div class='textos'>
                    <h1 class="titulo">Aprenda IA</h1>
                    <h2 class="descricao">
                    Estude Inteligência Artificial e suas ramificações com conteúdos produzidos por nós. Temos desde 
                    vídeos de Workshops e palestras, até nossos inúmeros posts no Medium, com códigos presentes no 
                    nosso GitHub.
                    </h2>
                </div>
            </div>
                {isVisible && <Parallax 
                strength={250}>
                    <div style={{height: '45vw', width: '100%'}}/>
                    <Background  >
                        <img class='parallax_img' src={projeto} alt="projeto"></img>
                    </Background>
                </Parallax>}
                {!isVisible && <img class='parallax_img' src={projeto} alt="projeto"></img>}
            <div class='bloco_info'>
                <img class="img" src={evento} alt="evento" />
                <div class='textos'>
                    <h1 class="titulo">Eventos</h1>
                    <h2 class="descricao">
                    Descubra as aplicações em vida real que realizamos a partir de nossos estudos e qual o impacto que 
                    IA pode ter no mundo!
                    </h2>
                </div>
            </div>
            <div>
                {isVisible && <Parallax 
                    strength={250}
                >
                    <div style={{height: '45vw', width: '100%'}}/>
                    <Background>
                    <img class='parallax_img' src={computador} alt="foto computador"></img>
                    </Background>
                </Parallax>}
                {!isVisible && <img class='parallax_img' src={computador} alt="foto computador"></img>}
            </div>
            <div class="bloco_info">
                <img class="img" src={projetos} alt="projetos" />
                <div class="textos">
                    <h1 class="titulo">Projetos</h1>
                    <h2 class="descricao">
                        Fique por dentro dos próximos eventos do grupo, que visam disseminar conteúdos relacionados a IA na 
                        comunidade paulistana e brasileira.
                    </h2>
                </div>
            </div>
            <Rodape />
        </div>
            
    );
}