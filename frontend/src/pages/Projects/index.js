import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function Projects () {

    const [projects, setProjects] = useState([]);
    const [tag, setTag] = useState('');
    const [requestTag, setRequestTag] = useState('');

    
    useEffect(() => {

        api.get(`projects?tags=${requestTag}`).then(response => {
            setProjects(response.data);
        })
    });

    function handleSearch(e) {
        e.preventDefault();
        setRequestTag(tag);
    };

    return (
        <div class='container'>
            <Cabecalho />
            <div class='titulo_projetos'>
                Projetos
            </div>
            <div class='descricao_projetos'>
                Veja alguns projetos feitos por nossas áreas de foco.
            </div>
            <form onSubmit={handleSearch}>
                <input
                        placeholder='Insira a Tag desejada'
                        value={tag}
                        onChange={e => setTag(e.target.value)}
                    />
                <button type='submit'>Pesquisar</button>
            </form>
            <ul>
                {projects.map(project => (
                    <li key={ project.projectId }>
                        <strong>{project.description}</strong>
                        
                        <a href={project.githubRepo} ><p>{project.githubRepo}</p></a>
                        <strong>Tags: {project.tags}</strong>
                        <p>Feito por: {project.squad}</p>
                    </li>
                ))}
            </ul>
            <Rodape />
        </div>
    );
}