import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.css';
import {FiPlus, FiSearch} from 'react-icons/fi'
import Cabecalho from '../../Tags/Cabecalho.js'
import Rodape from '../../Tags/Rodape.js'

import api from '../../services/api.js'

export default function Projects () {

    const [projects, setProjects] = useState([]);
    const [tag, setTag] = useState('');
    const [requestTag, setRequestTag] = useState('');
    const [showMessage, setShowMessage] = useState(true);

    
    useEffect(() => {

        api.get(`projects?tags=${requestTag}`).then(response => {
            setProjects([]);
            setProjects(response.data);
        })
    }, [requestTag]);

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
                <button class = "button_projects"type='submit'><FiSearch /> Pesquisar</button>
            </form>
            <ul class='ul_projects'>
                {projects.map(project => (
                    <li class='li_projects' key={ project.projectId }>
                        <strong>{project.description}</strong>
                        
                        <a target='_blank' href={project.githubRepo} >{project.githubRepo}</a>
                        <strong>Tags: {project.tags}</strong>
                        <p>Feito por: {project.squad}</p>
                    </li>
                ))}
            </ul>
            {(projects[0] == null) && <div class='descricao_projetos'>
            Não foi possível encontrar projetos com a tag desejada.</div>}
            <Rodape />
        </div>
    );
}