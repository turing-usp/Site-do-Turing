import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.png';
import github from '../../assets/github_icon.png';
import linkedin from '../../assets/in.png';
import grupo from "../../assets/grupo.JPG";
import email from "../../assets/mail_icon.svg"
import membro_padrao from "../../assets/avatar_placeholder.png";
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function AboutUs () { 
    
    const [diretores, setDiretores] = useState([]);
    const [membros, setMembros] = useState([]);
    const [trainees, setTrainees] = useState([]);

    useEffect(() => {
        api.get(`members?role=dir`).then(response => {
            setDiretores(response.data);
        });

        api.get(`members?role=memb`).then(response => {
            setMembros(response.data);
        });

        api.get(`members?role=train`).then(response => {
            setTrainees(response.data);
        });
        }, []);
    
    return (
        <div class='container'>
            <Cabecalho />
            <h1 class='primeiro_titulo_aboutus'>Sobre o Grupo Turing</h1>
            <img src={grupo} class='group_pic'/>
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
            {diretores.map(diretor => (
                <div class="container_membro">
                <div class="cartao">
                    {diretor.name}
                    <div class="foto_membro"><img src={diretor.photoLink} alt="Membro"/></div>
                    <div class="contato_membro">
                        <div class="rede_membro">
                            <a target="_blank" href={"mailto:" + diretor.email}><div class="mail_icon"><img src={email} alt="github"/></div></a>
                            <a target="_blank" href={diretor.github}><div class="github_membro"><img src={github} alt="github"/></div></a>
                            <a target="_blank" href={diretor.linkedin}><div class="linkedin_membro"><img src={linkedin} alt="github"/></div></a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            </div>
            
            

            <h2 class="tipos_de_membros">Membros</h2>

            <div class="container_membros">
            {membros.map(membro => (
                <div class="container_membro">
                <div class="cartao">{membro.name}
                    <div class="foto_membro"><img src={membro.photoLink} alt="Membro"/></div>
                    <div class="contato_membro">
                        <div class="rede_membro">
                            <a target="_blank" href={"mailto:" + membro.email}><div class="mail_icon"><img src={email} alt="github"/></div></a>
                            <a target="_blank" href={membro.github}><div class="github_membro"><img src={github} alt="github"/></div></a>
                            <a target="_blank" href={membro.linkedin}><div class="linkedin_membro"><img src={linkedin} alt="github"/></div></a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            </div>

          

            {trainees.length > 0 && <h2 class="tipos_de_membros">Trainees</h2>}

            <div class="container_membros">
            {trainees.map(trainee => (
                <div class="container_membro">
                <div class="cartao">
                    {trainee.name}
                    <div class="foto_membro"><img src={trainee.photoLink} alt="Membro"/></div>
                    <div class="contato_membro">
                        <div class="rede_membro">
                            <a target="_blank" href={"mailto:" + trainee.email}><div class="mail_icon"><img src={email} alt="github"/></div></a>
                            <a target="_blank" href={trainee.github}><div class="github_membro"><img src={github} alt="github"/></div></a>
                            <a target="_blank" href={trainee.linkedin}><div class="linkedin_membro"><img src={linkedin} alt="github"/></div></a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            </div>
            <Rodape />
        </div>
    );
}
