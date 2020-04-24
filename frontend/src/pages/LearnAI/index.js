import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import arvhab from "../../assets/arvore_de_habilidades.png";
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

export default function LearnAI () {
    return (
        <div>
            <Cabecalho />
                <div class="arvore_de_habilidades">
                    <span class="titulo_arvore">Árvore de Habilidades</span>
                    <div class="arvhab">
                        <img class="arvhab-image" src={arvhab} alt="arvhab"></img>
                    </div>
                        <div class="descricao_da_arvore">Quer aprender Data Science/IA e não sabe por onde começar?
                                        <br/> Dê uma olhada na Árvore de Habilidades do grupo Turing!
                                        <br/> Os itens clicáveis te levam a uma página no github onde você pode
                                        <br/> conferir um exemplo daquele conceito          
                        </div>
                    <div class="coggle">
                        <iframe class="arvore_coggle" src="https://embed.coggle.it/diagram/XO2xElTTBjb9Mduz/709359e9f455d0aa8e1f1539d84693b3289686cd3efad7ecd94a441aa6bb488e" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="medium">
                    <span class="titulo_arvore">Artigos do Medium</span>
                    <div class="medium_posts">
                        <div class="post">
                            <div class="medium_pic">
                            </div>
                            <div class="medium_title">
                                Artigo #1
                            </div>
                        </div>
                        <div class="post">
                            <div class="medium_pic">
                            </div>
                            <div class="medium_title">
                                Artigo #2
                            </div>
                        </div>
                        <div class="post">
                            <div class="medium_pic">
                            </div>
                            <div class="medium_title">
                                Artigo #3
                            </div>
                        </div>
                    </div>
                    <button class="moreposts">Mais posts</button>
                </div>
                
                    <Rodape />
        </div>
    );
}