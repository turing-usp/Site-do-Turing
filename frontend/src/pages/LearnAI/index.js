import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import './styles.css';

import CV from '../../assets/CV.png';
import NLP from '../../assets/NLP.png';
import DS from '../../assets/DS.png';
import QT from '../../assets/QT.png';
import RL from '../../assets/RL.png';

import github from '../../assets/github_vector.svg';
import arvhab from "../../assets/arvore_de_habilidades.png";

import Cabecalho from '../../Tags/Cabecalho.js';
import Rodape from '../../Tags/Rodape.js';

import api from '../../services/api.js';

export default function LearnAI () {

    const [showDesc, setShowDesc] = useState(true)
    const [showCV, setShowCV] = useState(false)
    const [showNLP, setShowNLP] = useState(false)
    const [showDS, setShowDS] = useState(false)
    const [showQT, setShowQT] = useState(false)
    const [showRL, setShowRL] = useState(false)

    const [posts, setPosts] = useState([]);

    function handleClick(area) {
        setShowDesc(false);
        setShowCV(false);
        setShowNLP(false);
        setShowDS(false);
        setShowQT(false);
        setShowRL(false);

        if (area == 'CV') {
            setShowDesc(showCV);
            setShowCV(!showCV);
        }
        else if (area == 'NLP') {
            setShowDesc(showNLP);
            setShowNLP(!showNLP);
        }
        else if (area == 'DS') {
            setShowDesc(showDS);
            setShowDS(!showDS);
        }
        else if (area == 'QT') {
            setShowDesc(showQT);
            setShowQT(!showQT);
        }
        else {
            setShowDesc(showRL);
            setShowRL(!showRL);
        };
    };

    useEffect(() => {
        api.get('/listMediumPosts').then(response => {
            setPosts(response.data.items);
        });
    }, []);


    return (
        <div class='container'>
            <Cabecalho />
            
            <div class='areas_de_foco'> 
                {showDesc && <div>
                    <span class="titulo">Áreas de Foco</span>
                    <div class='textbox'>
                        <p class='texto'>
                        Estude Inteligência Artificial e suas ramificações com conteúdos produzidos por nós. Temos desde 
                        vídeos de Workshops e palestras, até nossos inúmeros posts no Medium, com códigos presentes no 
                        nosso GitHub.
                        </p>
                    </div>
                </div>}
                {showCV && <div>
                    <span class="titulo">Visão Computacional</span>
                    <div class='textbox'>
                        <p class='texto'>
                        Como humanos somos capazes de enteder conteudos de imagens facilmente, mas e o computador? Como 
                        ele enxerga uma imagem? Como ele consegue discernir o seu conteudo e tirar informações dela?
                        Visão Computacional é a aréa de estudos focada em estudar justamente isso e como aproveitar todo 
                        o potencial de um computador tem de analisar imagens em um tempo infinitamente menor que pessoas.
                        Usamos todo esse potencial para criar aplicações que melhorem processos antes não automatizados.
                        Atualmente, trabalhamos em um sistema de reconhecimento e codificação de rostos para uma empresa parceira.
                        </p>  
                        <a  href='https://stackoverflow.com/admin.php' target="_blank">
                            <img class='github orange' src={github}/>
                        </a>
                    </div>
                </div>}
                {showNLP && <div>
                    <span class="titulo">Processamento de Linguagem Natural</span>
                    <div class='textbox'>
                        <p class='texto'>
                        Processamento de Linguagem Natural é uma área da inteligência artificial cujo objetivo é a 
                        interpretação e manipulação de linguagens humanas. NLP tem muitas tarefas, algumas se relacionam 
                        ao processamento mais imediato dos componentes linguísticos, como a análise sintática, morfossintática 
                        (POS Tagging), lematização etc. Outras, mais complexas, estão relacionadas a problemas de nível 
                        superior. Algumas dessas são: extração de informação, classificação de texto, análise de sentimentos, 
                        tradução automática, dentre outras coisas.
                        </p>
                        <a  href='https://stackoverflow.com/admin.php' target="_blank">
                            <img class='github orange' src={github} alt='github'/>
                        </a>
                    </div>
                </div>}
                {showDS && <div>
                    <span class="titulo">Ciência de Dados</span>
                    <div class='textbox'>
                        <p class='texto'>
                        A área de DataScience tem como objetivo aplicar o conhecimento desenvolvido dentro do grupo para 
                        resolver problemas reais dentro de organizações. Alinhando-se com a filosofia do grupo, a área 
                        procura sempre se aproximar de ONGs, com o intuito de produzir resultados que tenham um impacto 
                        positivo na sociedade.
                        </p>
                        <a  href='https://stackoverflow.com/admin.php' target="_blank">
                            <img class='github orange' src={github} alt='github'/>
                        </a>
                    </div>
                </div>}
                {showQT && <div>
                    <span class="titulo">Finanças Quantitativas</span>
                    <div class='textbox'>
                        <p class='texto'>
                        O Turing Quant tem como principal objetivo estudar as aplicações de programação e inteligência 
                        artificial no mercado financeiro, estudando finanças, aplicações e métodos quantitativos 
                        utilizados. Tudo isso através de cursos, implementações de papers, competições, e visitas a 
                        gestoras quantitativas e outras empresas do setor.
                        </p>
                        <a  href='https://stackoverflow.com/admin.php' target="_blank">
                            <img class='github blue' src={github} alt='github'/>
                        </a>
                    </div>
                </div>}
                {showRL && <div>
                    <span class="titulo">Aprendizado por Reforço</span>
                    <div class='textbox'>
                    <p class='texto'>
                    Quando queremos andar, ninguém nos diz quais movimentos devemos fazer. Ainda assim, por tentativa 
                    e erro, após cairmos muitas vezes e ficarmos de pé outras, conseguimos aprender. O objetivo da 
                    área de aprendizado por reforço é justamente esse: aprender a tomar as ações corretas a partir de 
                    reforços positivos (como ficar de pé) e negativos (como cair). Essa técnica é aplicável em diversas 
                    áreas, desde o controle de jogos, robôs e veículos, até tarefas como a redução de gastos energéticos 
                    com ar condicionado.
                    </p>
                        <a  href='https://stackoverflow.com/admin.php' target="_blank">
                            <img class='github blue' src={github} alt='github'/>
                        </a>
                    </div>
                </div>}
                <div class='hexgrid'>
                    <div class='hexgrid_row1'>
                        <div class="hexagon">
                            <div class="hexagon_in1">
                                <div class="hexagon_in2">
                                    <img class='img_area' src={CV} />
                                    <div
                                    class={`overlay ${showCV ? 'on' : 'off'} back_orange`} 
                                    onClick={() => handleClick('CV')}>
                                        Visão Computacional
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon_in1">
                                <div class="hexagon_in2">
                                    <img class='img_area' src={NLP} />
                                    <div
                                    class={`overlay ${showNLP ? 'on' : 'off'} back_orange`}
                                    onClick={() => handleClick('NLP')}>
                                        Processamento de Linguagem Natural
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon_in1">
                                <div class="hexagon_in2">
                                    <img class='img_area' src={DS} />
                                    <div
                                    class={`overlay ${showDS ? 'on' : 'off'} back_orange`} 
                                    onClick={() => handleClick('DS')}>
                                        Ciência de <br />Dados
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='hexgrid_row2'>
                        <div class="hexagon">
                            <div class="hexagon_in1">
                                <div class="hexagon_in2">
                                    <img class='img_area' src={QT} />
                                    <div
                                    class={`overlay ${showQT ? 'on' : 'off'} back_blue`} 
                                    onClick={() => handleClick('QT')}>
                                        Finanças Quantitativas
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hexagon">
                            <div class="hexagon_in1">
                                <div class="hexagon_in2">
                                    <img class='img_area' src={RL} />
                                    <div
                                    class={`overlay ${showRL ? 'on' : 'off'} back_blue`} 
                                    onClick={() => handleClick('RL')}>
                                        Aprendizado por Reforço
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div class="arvore_de_habilidades">
                <span class="titulo">Árvore de Habilidades</span>
                <div>
                    <img class="img_arvore" src={arvhab} alt="arvhab" />
                </div>
                <div class="texto">
                    Quer aprender Data Science/IA e não sabe por onde começar? <br/>
                    Dê uma olhada na Árvore de Habilidades do grupo Turing! <br/>
                    Os itens clicáveis te levam a uma página no github onde você pode <br/>
                    conferir um exemplo daquele conceito          
                </div>
                <div>
                    <iframe class="coggle_arvore" src="https://embed.coggle.it/diagram/XO2xElTTBjb9Mduz/709359e9f455d0aa8e1f1539d84693b3289686cd3efad7ecd94a441aa6bb488e" allowfullscreen />
                </div>
            </div>

            <div class="medium">
                <span class="titulo">Artigos do Medium</span>
                <div class='medium_posts'>
                    {posts.map(post => (
                        <a target='_blank' class='post' href={post.guid} key={post.guid}>
                            <div class='img_container'>
                                <img class ='medium_img' src={post.thumbnail} />
                            </div>
                            <div class='title_container'>
                                <div class='medium_title'>{post.title}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Rodape />
        </div>
    );
}