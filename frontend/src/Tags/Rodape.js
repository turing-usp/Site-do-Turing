import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom"
import logo2 from '../assets/logo2.png';

import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import medium from '../assets/medium.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

import location from '../assets/add_location_24px.svg'

function Rodape() {
    return (
        <div class= "rodape">
            <Link to='/'><img class = "rodape_logo2" src={logo2} alt="Grupo Turing" /></Link>
            <div class='rodape_social'>
                    <p class='rodape_social_box'>Siga-nos nas redes sociais</p>
                <br/>
                <a target='_blank'href='https://www.instagram.com/grupoturing.usp/'><img src={instagram} class="link_rodape"/></a>
                <a target='_blank'href='https://pt-br.facebook.com/grupoturing.usp/'><img src={facebook} class="link_rodape"/></a>
                <a target='_blank'href='https://www.youtube.com/channel/UCIZSLh8_ST5np3k60qWOiAA'><img src={youtube} class="link_rodape"/></a>
                <a target='_blank'href='https://medium.com/turing-talks'><img src={medium} class="link_rodape"/></a>
                <a target='_blank'href='https://github.com/GrupoTuring'><img src={github} class="link_rodape"/></a>
                <a target='_blank'href='https://www.linkedin.com/company/grupo-turing/?originalSubdomain=br'><img src={linkedin} class="link_rodape"/></a>
            </div>
            <div class='location'>
                <a target='_blank' class='location'href='https://goo.gl/maps/Cw8RH7vbBo6DiuZTA'><p><img src={location} />InovaUSP</p>
                <p class='location_text'>Av. Prof. Lúcio Martins Rodrigues, 370<br/>
                Butantã <br/>
                São Paulo - SP,<br />
                05508-020</p></a>
            </div>
        </div>
    );
}

export default Rodape;