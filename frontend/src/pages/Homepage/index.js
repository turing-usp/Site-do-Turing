import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Parallax } from 'react-parallax';

import './styles.css';

import pllx_network from '../../assets/background.png';
import pllx_apresentacao from '../../assets/foto-apresentacao.png';
import pllx_notebook from '../../assets/foto-notebook.png';

import aprenda_ia from '../../assets/asset-aprenda-ia.png';
import eventos from '../../assets/asset-eventos.png';
import projetos from '../../assets/asset-projetos.png';

import Cabecalho from '../../Tags/Cabecalho';
import Rodape from '../../Tags/Rodape';


export default function Homepage() {

    return(        
        <div class='homepage_container'>
            <Cabecalho />
            <Parallax strength={250}>
                <div class='intro'>
                    <div class='caixa_superior'>
                        <h1 class='texto_superior'>
                            Conheça o Grupo Turing: uma extensão universitária da Universidade de São Paulo 
                            (USP) que acredita em gerar impacto disseminando, aplicando e estudando Inteligência 
                            Artificial
                        </h1>
                    </div>
                    <Link to='/AboutUs'>
                        <button class='saiba_mais' href='#'>Saiba mais</button>
                    </Link>
                </div>
                <Background>
                    <img class='parallax_superior' src={pllx_network} alt='technology_network' />
                </Background>
            </Parallax>
            <div class='bloco_info'>
                <img class='img' src={aprenda_ia} alt='asset_aprenda_ia' />
                <div class='caixa_textos'>
                    <h1 class='titulos'>APRENDA IA</h1>
                    <h2 class='descricao'>
                        Estude Inteligência Artificial e suas ramificações com conteúdos produzidos por nós. 
                        Temos desde vídeos de Workshops e palestras, até nossos inúmeros posts no Medium, com 
                        códigos presentes no nosso GitHub.
                    </h2>
                </div>
            </div>
            <Parallax strength={250}>
                <div class='parallax_window'/>
                <Background>
                    <img class='parallax_img' src={pllx_apresentacao} alt='apresentação' />
                </Background>
            </Parallax>                
            <div class='bloco_info invert'>
                <img class='img' src={eventos} alt='asset_eventos' />
                <div class='caixa_textos'>
                    <h1 class='titulos'>EVENTOS</h1>
                    <h2 class='descricao'>
                        Fique por dentro dos próximos eventos do grupo, que visam disseminar conteúdos 
                        relacionados a IA na comunidade paulistana e brasileira.
                    </h2>
                </div>
            </div>
            <Parallax strength={250}>
                <div class='parallax_window'/>
                <Background>
                    <img class='parallax_img' src={pllx_notebook} alt='notebook' />
                </Background>
            </Parallax>
            <div class='bloco_info'>
                <img class='img' src={projetos} alt='asset_projetos' />
                <div class='caixa_textos'>
                    <h1 class='titulos'>PROJETOS</h1>
                    <h2 class='descricao'>
                        Descubra as aplicações em vida real que realizamos a partir de nossos estudos e 
                        qual o impacto que IA pode ter no mundo!
                    </h2>
                </div>
            </div>
            <Rodape />
        </div>            
    );
}