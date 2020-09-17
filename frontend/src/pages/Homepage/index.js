import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Parallax } from 'react-parallax';

import pllx_network from '../../assets/background.png';
import pllx_apresentacao from '../../assets/foto-apresentacao.png';
import pllx_notebook from '../../assets/foto-notebook.png';
import aprenda_ia from '../../assets/asset-aprenda-ia.png';
import eventos from '../../assets/asset-eventos.png';
import projetos from '../../assets/asset-projetos.png';

import Cabecalho from '../../Tags/Cabecalho';
import Rodape from '../../Tags/Rodape';
import './styles.css';

import usePageView from '../../services/googleAnalytics.hook';
import {pageViewConsts} from '../../services/googleAnalytics.data';

export default function Homepage() {

    usePageView(pageViewConsts.Homepage);

    return(        
        <div class='container home_container'>
            <Cabecalho />
            <Parallax strength={250}>
                <div class='home_intro'>
                    <div class='home_caixa_superior'>
                        <p class='text home_texto_superior'>
                            Conheça o Grupo Turing: uma extensão universitária da Universidade de São Paulo 
                            (USP) que acredita em gerar impacto disseminando, aplicando e estudando Inteligência 
                            Artificial
                        </p>
                    </div>
                    <Link to='/AboutUs'>
                        <button class='home_saiba_mais_btn' href='#'>Saiba mais</button>
                    </Link>
                </div>
                <Background>
                    <img class='home_parallax_superior' src={pllx_network} alt='technology_network' />
                </Background>
            </Parallax>
            <div class='home_bloco_info'>
                <img class='home_asset' src={aprenda_ia} alt='asset_aprenda_ia' />
                <div class='home_caixa_textos'>
                    <h1 class='home_title'>APRENDA IA</h1>
                    <p class='home_descricao'>
                        Estude Inteligência Artificial e suas ramificações com conteúdos produzidos por nós. 
                        Temos desde vídeos de Workshops e palestras, até nossos inúmeros posts no Medium, com 
                        códigos presentes no nosso GitHub.
                    </p>
                </div>
            </div>
            <Parallax strength={250}>
                <div class='home_parallax_window'/>
                <Background>
                    <img class='home_parallax_img' src={pllx_apresentacao} alt='apresentação' />
                </Background>
            </Parallax>                
            <div class='home_bloco_info invert'>
                <img class='home_asset' src={eventos} alt='asset_eventos' />
                <div class='home_caixa_textos'>
                    <h1 class='home_title'>EVENTOS</h1>
                    <p class='home_descricao'>
                        Fique por dentro dos próximos eventos do grupo, que visam disseminar conteúdos 
                        relacionados a IA na comunidade paulistana e brasileira.
                    </p>
                </div>
            </div>
            <Parallax strength={250}>
                <div class='home_parallax_window'/>
                <Background>
                    <img class='home_parallax_img' src={pllx_notebook} alt='notebook' />
                </Background>
            </Parallax>
            <div class='home_bloco_info'>
                <img class='home_asset' src={projetos} alt='asset_projetos' />
                <div class='home_caixa_textos'>
                    <h1 class='home_title'>PROJETOS</h1>
                    <p class='home_descricao'>
                        Descubra as aplicações em vida real que realizamos a partir de nossos estudos e 
                        qual o impacto que IA pode ter no mundo!
                    </p>
                </div>
            </div>
            <Rodape />
        </div>            
    );
}