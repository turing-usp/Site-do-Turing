import React, { useEffect, useState } from 'react';

import CV from '../../assets/CV.png';
import NLP from '../../assets/NLP.png';
import DS from '../../assets/DS.png';
import QT from '../../assets/QT.png';
import RL from '../../assets/RL.png';
import github from '../../assets/github_vector.svg';
import arvhab from '../../assets/arvore_de_habilidades.png';

import Cabecalho from '../../Tags/Cabecalho.js';
import Rodape from '../../Tags/Rodape.js';
import api from '../../services/api.js';
import './styles.css';

import usePageView from '../../services/googleAnalytics.hook';
import {pageViewConsts} from '../../services/googleAnalytics.data';

export default function LearnAI () {

    usePageView(pageViewConsts.LearnAI);

    /***********/
    /* Estados */
    /***********/

    /*** Áreas de Foco ***/

    const [showDesc, setShowDesc] = useState(true)
    const [showCV, setShowCV] = useState(false)
    const [showNLP, setShowNLP] = useState(false)
    const [showDS, setShowDS] = useState(false)
    const [showQT, setShowQT] = useState(false)
    const [showRL, setShowRL] = useState(false)

    /*** Medium ***/

    const [posts, setPosts] = useState([]);

    /***********/
    /* Funções */
    /***********/

    /*** Áreas de Foco ***/

    function handleClick(area) {
        setShowDesc(false)
        setShowCV(false)
        setShowNLP(false)
        setShowDS(false)
        setShowQT(false)
        setShowRL(false)

        if (area === 'CV') {
            setShowDesc(showCV);
            setShowCV(!showCV);
        } else if (area === 'NLP') {
            setShowDesc(showNLP);
            setShowNLP(!showNLP);
        } else if (area === 'DS') {
            setShowDesc(showDS);
            setShowDS(!showDS);
        } else if (area === 'QT') {
            setShowDesc(showQT);
            setShowQT(!showQT);
        } else {
            setShowDesc(showRL);
            setShowRL(!showRL);
        };
    };
    
    /*** Medium ***/

    useEffect(() => {
        api.get('/listMediumPosts').then(response => {
            setPosts(response.data.items);
        });
    }, []);

    /**********/
    /* Página */
    /**********/

    return (
        <div class='container'>
            <Cabecalho />            
            <div class='areas_de_foco'> 
                {showDesc && <div>
                    <h1 class='title areas_title_fadein'>Áreas de Foco</h1>
                    <div class='area_textbox'>
                        <p class='text'>
                        Estude inteligência artificial e suas ramificações com conteúdos produzidos por nós. Temos desde 
                        vídeos de workshops e palestras, até nossos inúmeros posts no Medium, com códigos presentes no 
                        nosso Github.
                        </p>
                    </div>
                </div>}
                {showCV && <div>
                    <h1 class='title areas_title_fadein'>Visão Computacional</h1>
                    <div class='area_textbox'>
                        <p class='text'>
                        Como humanos somos capazes de enteder conteudos de imagens facilmente, mas e o computador? Como 
                        ele enxerga uma imagem? Como ele consegue discernir o seu conteudo e tirar informações dela?<br /><br />
                        Visão Computacional é a aréa de estudos focada em estudar justamente isso e como aproveitar todo 
                        o potencial de um computador tem de analisar imagens em um tempo infinitamente menor que pessoas.
                        Usamos todo esse potencial para criar aplicações que melhorem processos antes não automatizados.
                        Atualmente, trabalhamos em um sistema de reconhecimento e codificação de rostos para uma empresa parceira.
                        </p>  
                        {false && <a href='# ' target='_blank' rel='noopener noreferrer'>
                            <img class='area_git_ico area_git_ico_orange' src={github} alt='github_vector' />
                        </a>}
                    </div>
                </div>}
                {showNLP && <div>
                    <h1 class='title areas_title_fadein'>Processamento de Linguagem Natural</h1>
                    <div class='area_textbox'>
                        <p class='text'>
                        Processamento de Linguagem Natural é uma área da inteligência artificial cujo objetivo é a 
                        interpretação e manipulação de linguagens humanas.<br /><br />NLP tem muitas tarefas, algumas se relacionam 
                        ao processamento mais imediato dos componentes linguísticos, como a análise sintática, morfossintática 
                        (POS Tagging), lematização etc. Outras, mais complexas, estão relacionadas a problemas de nível 
                        superior. Algumas dessas são: extração de informação, classificação de texto, análise de sentimentos, 
                        tradução automática, dentre outras coisas.
                        </p>
                        {false && <a href='# ' target='_blank' rel='noopener noreferrer'>
                            <img class='area_git_ico area_git_ico_orange' src={github} alt='github_vector' />
                        </a>}
                    </div>
                </div>}
                {showDS && <div>
                    <h1 class='title areas_title_fadein'>Ciência de Dados</h1>
                    <div class='area_textbox'>
                        <p class='text'>
                        A área de DataScience tem como objetivo aplicar o conhecimento desenvolvido dentro do grupo para 
                        resolver problemas reais dentro de organizações. Alinhando-se com a filosofia do grupo, a área 
                        procura sempre se aproximar de ONGs, com o intuito de produzir resultados que tenham um impacto 
                        positivo na sociedade.
                        </p>
                        {false && <a href='# ' target='_blank' rel='noopener noreferrer'>
                            <img class='area_git_ico area_git_ico_orange' src={github} alt='github_vector' />
                        </a>}
                    </div>
                </div>}
                {showQT && <div>
                    <h1 class='title areas_title_fadein'>Finanças Quantitativas</h1>
                    <div class='area_textbox'>
                        <p class='text'>
                        O Turing Quant tem como principal objetivo estudar as aplicações de programação e inteligência 
                        artificial no mercado financeiro, estudando finanças, aplicações e métodos quantitativos 
                        utilizados. Tudo isso através de cursos, implementações de papers, competições, e visitas a 
                        gestoras quantitativas e outras empresas do setor.
                        </p>
                        {false && <a href='# ' target='_blank' rel='noopener noreferrer'>
                            <img class='area_git_ico area_git_ico_blue' src={github} alt='github_vector' />
                        </a>}
                    </div>
                </div>}
                {showRL && <div>
                    <h1 class='title areas_title_fadein'>Aprendizado por Reforço</h1>
                    <div class='area_textbox'>
                    <p class='text'>
                    Quando queremos andar, ninguém nos diz quais movimentos devemos fazer. Ainda assim, por tentativa 
                    e erro, após cairmos muitas vezes e ficarmos de pé outras, conseguimos aprender.<br /><br />O objetivo da 
                    área de aprendizado por reforço é justamente esse: aprender a tomar as ações corretas a partir de 
                    reforços positivos (como ficar de pé) e negativos (como cair). Essa técnica é aplicável em diversas 
                    áreas, desde o controle de jogos, robôs e veículos, até tarefas como a redução de gastos energéticos 
                    com ar condicionado.
                    </p>
                        {false && <a href='# ' target='_blank' rel='noopener noreferrer'>
                            <img class='area_git_ico area_git_ico_blue' src={github} alt='github_vector' />
                        </a>}
                    </div>
                </div>}
                <div class='hexgrid'>
                    <div class='hexgrid_row1'>
                        <div class='hexagon'>
                            <div class='hexagon_in1'>
                                <div class='hexagon_in2'>
                                    <img class='area_img' src={CV} alt='CV' />
                                    <div
                                    class={`area_overlay area_overlay_bkgd_orange ${showCV ? 'area_overlay_on' : 'area_overlay_off'}`} 
                                    onClick={() => handleClick('CV')}>
                                        <p class='text area_overlay_text'>Visão Computacional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='hexagon'>
                            <div class='hexagon_in1'>
                                <div class='hexagon_in2'>
                                    <img class='area_img' src={NLP} alt='NLP' />
                                    <div
                                    class={`area_overlay area_overlay_bkgd_orange ${showNLP ? 'area_overlay_on' : 'area_overlay_off'}`}
                                    onClick={() => handleClick('NLP')}>
                                        <p class='text area_overlay_text'>Processamento<br />de Linguagem Natural</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='hexagon'>
                            <div class='hexagon_in1'>
                                <div class='hexagon_in2'>
                                    <img class='area_img' src={DS} alt='DataScience' />
                                    <div
                                    class={`area_overlay area_overlay_bkgd_orange ${showDS ? 'area_overlay_on' : 'area_overlay_off'}`} 
                                    onClick={() => handleClick('DS')}>
                                        <p class='text area_overlay_text'>Ciência de<br />Dados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='hexgrid_row2'>
                        <div class='hexagon'>
                            <div class='hexagon_in1'>
                                <div class='hexagon_in2'>
                                    <img class='area_img' src={QT} alt='Quant' />
                                    <div
                                    class={`area_overlay area_overlay_bkgd_blue ${showQT ? 'area_overlay_on' : 'area_overlay_off'}`} 
                                    onClick={() => handleClick('QT')}>
                                        <p class='text area_overlay_text'>Finanças Quantitativas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='hexagon'>
                            <div class='hexagon_in1'>
                                <div class='hexagon_in2'>
                                    <img class='area_img' src={RL} alt='RL' />
                                    <div
                                    class={`area_overlay area_overlay_bkgd_blue ${showRL ? 'area_overlay_on' : 'area_overlay_off'}`} 
                                    onClick={() => handleClick('RL')}>
                                        <p class='text area_overlay_text'>Aprendizado<br />por Reforço</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div class='arvore_de_habilidades'>
                <h1 class='title'>Árvore de Habilidades</h1>
                <div>
                    <img class='arvhab_img' src={arvhab} alt='arvore_de_habilidades' />
                    <p class='text arvhab_text'>
                        Quer aprender Data Science/IA e não sabe por onde começar?<br />
                        Dê uma olhada na Árvore de Habilidades do Grupo Turing!
                    </p>
                    <a href='https://github.com/GrupoTuring/Arvore-de-Habilidades' class='arvhab_git_btn' target='_blank' rel='noopener noreferrer'>
                        <img class='arvhab_btn_git_ico arvhab_btn_git_ico_white' src={github} alt='github_vector' />
                        <p class='text arvhab_btn_text'>Acesse a Árvore de Habilidades no Github</p>
                    </a>
                </div>
                <div>
                    <iframe class='arvhab_coggle' title='coggle' src='https://embed.coggle.it/diagram/XO2xElTTBjb9Mduz/709359e9f455d0aa8e1f1539d84693b3289686cd3efad7ecd94a441aa6bb488e' allowfullscreen />
                </div>
            </div>
            <div class='medium'>
                <h1 class='title'>Artigos do Medium</h1>
                <div class='medium_posts'>
                    {posts.map(post => (
                        <a target='_blank' class='post' href={post.guid} key={post.guid} rel='noopener noreferrer'>
                            <div class='medium_img_ctr'>
                                <img class ='medium_img' src={post.thumbnail} alt='post_thumbnail' />
                            </div>
                            <div class='medium_post_title_ctr'>
                                <p class='text medium_post_title'>{post.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Rodape />
        </div>
    );
}