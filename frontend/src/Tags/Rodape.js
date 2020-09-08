import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/logo2.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import medium from '../assets/medium.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

import { TiLocation } from 'react-icons/ti'


function Rodape() {
    return (
        <div class='rodape'>
            <div>
                <Link to='/'>
                    <img class='rodape_logo' src={logo} alt='grupo_turing' />
                </Link>
            </div>
            <div class='social_ctr'>
                <p class='social_title'>Siga-nos nas redes sociais</p>
                <div class='social_grid'>
                    <a target='_blank' href='https://www.instagram.com/grupoturing.usp/' rel='noopener noreferrer'>
                        <img src={instagram} class='social_circle' alt='instagram' />
                    </a>
                    <a target='_blank' href='https://pt-br.facebook.com/grupoturing.usp/' rel='noopener noreferrer'>
                        <img src={facebook} class='social_circle' alt='facebook' />
                    </a>
                    <a target='_blank' href='https://www.youtube.com/channel/UCIZSLh8_ST5np3k60qWOiAA' rel='noopener noreferrer'>
                        <img src={youtube} class='social_circle' alt='youtube' />
                    </a>
                    <a target='_blank' href='https://medium.com/turing-talks' rel='noopener noreferrer'>
                        <img src={medium} class='social_circle' alt='medium' />
                    </a>
                    <a target='_blank' href='https://github.com/GrupoTuring' rel='noopener noreferrer'>
                        <img src={github} class='social_circle' alt='github' />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/company/grupo-turing/?originalSubdomain=br' rel='noopener noreferrer'>
                        <img src={linkedin} class='social_circle' alt='linkedin' />
                    </a>
                </div>
            </div>
            <div class='location_ctr'>
                <a target='_blank' class='location_link' href='https://goo.gl/maps/Cw8RH7vbBo6DiuZTA' rel='noopener noreferrer'>
                    <TiLocation class='location_icon' />
                    <p class='location_title'>InovaUSP</p>
                </a>
                    <p class='location_text'>
                        Av. Prof. Lúcio Martins Rodrigues, 370<br />
                        Butantã - São Paulo, SP
                    </p>
            </div>
        </div>
    );
}

export default Rodape;