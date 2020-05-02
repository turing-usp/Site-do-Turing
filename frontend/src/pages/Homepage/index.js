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
import Rodape from '../../Tags/Rodape';


export default function Homepage(){
    return(
        <div class='homepage_container'>
            <Cabecalho />
                <Parallax style={{marginTop: "7.95em"}}
                strength={250}>
                    <div style={{height: '60vw', width: '100%'}}>
                        <div class="caixa-superior">
                            <h1 class="texto-superior">
                            O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso,<br /> 
                            mas o Naruto também cresceu sem pai...
                            </h1>
                        </div>
                        <br />
                        <button class="saiba-mais" href="#">Saiba mais</button>
                    </div>
                    <Background>
                        <img class='parallax_img' src={fundo} alt="fundo azul" />
                    </Background>
                </Parallax>
            <div class='bloco_info'>
                <img class="img" src={ialogo} alt="logo-ia" />
                <div class='textos'>
                    <h1 class="titulo">Aprenda IA</h1>
                    <h2 class="descricao">
                        ...é o sonho dele e o Naruto daria a vida por isso sem hesitar.<br />
                        Meu palpite é que ele se cansou de chorar<br />
                        e decidiu fazer alguma coisa a respeito!</h2>
                </div>
            </div>
                <Parallax 
                strength={250}>
                    <div style={{height: '45vw', width: '100%'}}/>
                    <Background  >
                        <img class='parallax_img' src={projeto} alt="projeto"></img>
                    </Background>
                </Parallax>
            <div class='bloco_info'>
                <img class="img" src={evento} alt="evento" />
                <div class='textos'>
                    <h1 class="titulo">Eventos</h1>
                    <h2 class="descricao">
                        ...Mesmo assim eu nunca vi ele chorar,<br />
                        ficar zangado ou se dar por vencido,<br />
                        ele está sempre disposto a melhorar,<br />
                        ele quer ser respeitado...</h2>
                </div>
            </div>
            <div>
                <Parallax 
                    strength={250}
                >
                    <div style={{height: '45vw', width: '100%'}}/>
                    <Background>
                    <img class='parallax_img' src={computador} alt="foto computador"></img>
                    </Background>
                </Parallax>
            </div>
            <div class="bloco_info">
                <div class="textos">
                    <h1 class="titulo">Projetos</h1>
                    <h2 class="descricao">
                        ...é o sonho dele e o Naruto daria a vida por isso sem hesitar.<br />
                        Meu palpite é que ele se cansou de chorar<br />
                        e decidiu fazer alguma coisa a respeito!</h2>
                </div>
                <img class="img" src={projetos} alt="projetos"></img>
            </div>
            <Rodape />
        </div>
            
    );
}