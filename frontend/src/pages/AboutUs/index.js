import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import github from '../../assets/github_icon.png';
import {FiMail} from 'react-icons/fi';
import membro_padrao from "../../assets/avatar_placeholder.png";
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function AboutUs () {
    return (
        <div class='container'>
            <Cabecalho />
            <h1 class='titulo_aboutus'>Sobre o Grupo Turing</h1>
            <p class='descricao_aboutus'>
                Somos o grupo de extensão acadêmica
                da Universidade de São Paulo
                que estuda, dissemina e aplica
                conhecimentos de Inteligência Artificial.
            </p>
            <h1 class='titulo_aboutus'>História</h1>
            <p class='descricao_aboutus'>
                Surgimos em 2015 como um grupo de estudos
                originalmente idealizado por duas mulheres,
                fundado por um grupo de três politécnicos
                e batizado em homenagem a Alan Turing (1912-1954),
                matemático e lógico inglês considerado o pai da computação.
            </p>
            <h1 class='titulo_aboutus'>Missão</h1>
            <p class='descricao_aboutus'>
                Nossa missão é se tornar uma referência nacional
                em produção de conteúdo relacionado à Inteligência Artificial.
                Abrangendo material de estudo em português,
                a realização de eventos como workshops e 
                até a aplicação em projetos.
            </p>
            <h1 class='titulo_aboutus'>Cultura</h1>
            <p class='descricao_aboutus'>
                Prezamos pela diversidade e o respeito ao próximo.
                Valorizamos a proatividade de nossos membros
                nos quesitos de entrega, liderança
                e a habilidade de trabalhar em equipe tomando atitudes,
                mas mantendo-se aberto a sugestões.
            </p>
            <br/>

            <h1 class='titulo_aboutus'>Nossos Membros</h1>
            <h2 class="tipos_de_membros">Diretores</h2>

            <div class="container_membros">
                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">Felipe Azank</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>


                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">Lucas Sepeda</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="tipos_de_membros">Membros</h2>

            <div class="container_membros">
                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">Ciclano</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>


                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">Fulano</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="tipos_de_membros">Trainees</h2>
            <div class="container_membros">
                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">X Æ A-12</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>


                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">Inês Brasil</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>

                <div class="container_membro">
                    <div class="cartao">
                        <span class="nome_membro">Gretchen</span>
                        <div class="foto_membro"><img src={membro_padrao} alt="Membro"/></div>
                        <div class="contato_membro">
                            <a href="mailto:azank@azank.com" class="email_membro"><FiMail size={20} color="#F2994A"/></a>
                            <a href="www.gitdoazank.com"><div class="github_membro"><img src={github} alt="github"/></div></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Rodape />
        </div>
    );
}